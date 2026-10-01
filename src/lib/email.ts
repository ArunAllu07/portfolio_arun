export const EMAIL_ADDRESS = "kethavatharun856@gmail.com";
export const EMAIL_SUBJECT = "Let's Collaborate!";
export const EMAIL_BODY =
  "Hi Arun,\n\nI'm reaching out to discuss an opportunity...";

export const MAILTO_URL = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
  EMAIL_SUBJECT
)}&body=${encodeURIComponent(EMAIL_BODY)}`;

export const GMAIL_COMPOSE_URL =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL_ADDRESS
  )}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

export const openEmailWithFallback = () => {
  let fallbackHandled = false;

  const clearFallback = () => {
    fallbackHandled = true;
    window.clearTimeout(fallbackTimer);
    window.removeEventListener("blur", clearFallback);
    document.removeEventListener("visibilitychange", onVisibilityChange);
    window.removeEventListener("pagehide", clearFallback);
  };

  const onVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      clearFallback();
    }
  };

  const fallbackTimer = window.setTimeout(() => {
    if (!fallbackHandled && document.visibilityState === "visible") {
      window.open(GMAIL_COMPOSE_URL, "_blank", "noopener,noreferrer");
    }
    clearFallback();
  }, 1200);

  window.addEventListener("blur", clearFallback);
  document.addEventListener("visibilitychange", onVisibilityChange);
  window.addEventListener("pagehide", clearFallback);
  window.location.href = MAILTO_URL;
};
