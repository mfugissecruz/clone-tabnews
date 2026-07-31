const suspicious = /^NEXT_PUBLIC_.*(SECRET|PRIVATE|TOKEN|PASSWORD|_KEY)$/i;

// allowlist: chaves publicas por design que casam com o padrao acima
const allowlist = new Set([]);

const bad = Object.keys(process.env).filter(
  (key) => suspicious.test(key) && !allowlist.has(key),
);

if (bad.length) {
  console.error("Var sensivel exposta ao cliente:", bad);
  process.exit(1);
}
