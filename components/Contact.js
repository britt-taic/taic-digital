"use client";

import { useRef, useState } from "react";
import styles from "./Contact.module.css";

const SERVICE_TAGS = [
  "Web strategy",
  "UX/UI design",
  "SEO & GEO",
  "Paid media",
  "Analytics",
  "Content",
  "Not sure yet",
];

export default function Contact() {
  const nameRef = useRef(null);
  const lastRef = useRef(null);
  const emailRef = useRef(null);
  const orgRef = useRef(null);
  const msgRef = useRef(null);

  const [tags, setTags] = useState({});
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const toggleTag = (tag) => {
    setTags((t) => ({ ...t, [tag]: !t[tag] }));
  };

  const handleSubmit = async () => {
    const firstName = nameRef.current?.value.trim();
    const lastName = lastRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const errs = {};
    if (!firstName || !lastName) errs.name = true;
    if (!email || email.indexOf("@") < 1 || email.indexOf(".") < 0)
      errs.email = true;
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSendError(false);
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          organization: orgRef.current?.value.trim(),
          services: SERVICE_TAGS.filter((t) => tags[t]),
          message: msgRef.current?.value.trim(),
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    [nameRef, lastRef, emailRef, orgRef, msgRef].forEach((ref) => {
      if (ref.current) ref.current.value = "";
    });
    setTags({});
    setErrors({});
    setSendError(false);
    setSent(false);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div data-reveal="up">
            <h2 className={styles.headline}>Let&apos;s Chat</h2>
          </div>

          <div className={styles.card} data-reveal="right">
            {sent ? (
              <div className={styles.sent}>
                <div>
                  <div className={styles.sentTitle}>Sent.</div>
                  <div className={styles.sentBody}>
                    Thanks for your inquiry, I will be in touch within 1-2
                    business days!
                  </div>
                  <button
                    type="button"
                    className={styles.resetBtn}
                    onClick={handleReset}
                  >
                    Send another
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.fields}>
                <div className={styles.fieldRow}>
                  <label>
                    <input
                      ref={nameRef}
                      type="text"
                      placeholder="First Name*"
                      className={errors.name ? styles.inputError : styles.input}
                    />
                  </label>
                  <label>
                    <input
                      ref={lastRef}
                      type="text"
                      placeholder="Last Name*"
                      className={errors.name ? styles.inputError : styles.input}
                    />
                  </label>
                </div>
                <span className={errors.name ? styles.hintShown : styles.hint}>
                  Needed so I know who I am replying to.
                </span>
                <div className={styles.fieldRow}>
                  <label>
                    <input
                      ref={emailRef}
                      type="email"
                      placeholder="Email*"
                      className={errors.email ? styles.inputError : styles.input}
                    />
                  </label>
                  <label>
                    <input
                      ref={orgRef}
                      type="text"
                      placeholder="Organization name"
                      className={styles.input}
                    />
                  </label>
                </div>
                <div>
                  <span className={styles.fieldLabel}>
                    What kind of services are you looking for?
                  </span>
                  <div className={styles.tagRow}>
                    {SERVICE_TAGS.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`${styles.tagBtn} ${
                          tags[tag] ? styles.tagOn : ""
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                <label>
                  <span className={styles.textareaLabel}>
                    Send some details about how we can best support you!
                  </span>
                  <textarea ref={msgRef} rows={4} className={styles.textarea} />
                </label>
                {sendError && (
                  <span className={styles.hintShown}>
                    Something went wrong sending that — try again, or email
                    britt@taicdigital.ca directly.
                  </span>
                )}
                <div className={styles.actions}>
                  <button
                    type="button"
                    className={styles.submitBtn}
                    onClick={handleSubmit}
                    disabled={sending}
                  >
                    {sending ? "Sending…" : "Submit"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
