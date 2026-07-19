"use client";

import { useState, type FormEvent } from "react";

type Fields = "name" | "email" | "subject" | "message";
type Errors = Partial<Record<Fields, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next: Errors = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const subject = String(form.get("subject") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Please enter a valid email address.";
    if (subject.length < 3) next.subject = "Please add a short subject.";
    if (message.length < 20) next.message = "Please share at least 20 characters.";

    setErrors(next);
    if (Object.keys(next).length) {
      setNotice("Please review the highlighted fields.");
      return;
    }
    setNotice("The form is ready, but delivery is not connected yet. Please use GitHub until an email provider is configured.");
  }

  const errorProps = (field: Fields) => ({
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <form className="contact-form glass-panel" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" placeholder="Your name" {...errorProps("name")} />
          {errors.name ? <small id="name-error">{errors.name}</small> : null}
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" {...errorProps("email")} />
          {errors.email ? <small id="email-error">{errors.email}</small> : null}
        </label>
      </div>
      <div className="form-grid">
        <label>
          <span>Company / organization <em>Optional</em></span>
          <input name="company" autoComplete="organization" placeholder="Where you work" />
        </label>
        <label>
          <span>Subject</span>
          <input name="subject" placeholder="Role, project, or hello" {...errorProps("subject")} />
          {errors.subject ? <small id="subject-error">{errors.subject}</small> : null}
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea name="message" rows={5} placeholder="Tell me a little about the opportunity or problem." {...errorProps("message")} />
        {errors.message ? <small id="message-error">{errors.message}</small> : null}
      </label>
      <input className="form-trap" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-footer">
        <button className="button button-bright" type="submit">Check message <span aria-hidden="true">↗</span></button>
        <p>Delivery is intentionally disabled until a form provider is configured.</p>
      </div>
      <p className="form-notice" role="status" aria-live="polite">{notice}</p>
    </form>
  );
}
