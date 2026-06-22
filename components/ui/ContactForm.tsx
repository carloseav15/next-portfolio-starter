"use client";

import { useState, type FormEvent } from "react";
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setStatus("sending");

    try {
      // Simulate API submission delay for premium dynamic feedback
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Clear inputs and set success
      setEmail("");
      setMessage("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="space-y-4">
      {status === "success" ? (
        <div className="rounded-xl border border-[var(--color-proof-verified-border)] bg-[var(--color-proof-verified-bg)] p-4 text-[var(--color-proof-verified-text)] flex items-start gap-3 animate-fade-in">
          <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sm">Message simulated successfully!</p>
            <p className="mt-1 text-xs opacity-90">
              Thank you for testing. In production, this connects to a serverless backend.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-3 text-xs font-bold underline hover:opacity-80"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          {status === "error" && (
            <div className="rounded-xl border border-[var(--color-error-text)]/20 bg-[var(--color-error-bg)] p-4 text-[var(--color-error-text)] flex items-start gap-3">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              <p className="text-xs font-semibold">Something went wrong. Please try again.</p>
            </div>
          )}

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-1"
            >
              Your Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "sending"}
              placeholder="recruiter@company.com"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-1)] px-3.5 py-2 text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] disabled:opacity-50"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-1"
            >
              Message / Role Context
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={status === "sending"}
              placeholder="Hi Carlos, we are looking for a Senior Product Engineer for our team..."
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-1)] px-3.5 py-2 text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] disabled:opacity-50 resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className={cn(
              "w-full inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] font-semibold text-[var(--color-on-accent)] transition hover:bg-[var(--color-accent-strong)] disabled:opacity-60 shadow-button",
            )}
          >
            {status === "sending" ? (
              <>
                Sending Message
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              <>
                Send Message
                <Mail className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
