export default function index({ type, children }) {
  const TAG = type || "h1"
  return <TAG>{children}</TAG>
}
