// Shared safety gate for one-off scripts in this folder that mutate real user data
// (password resets, payment/subscription overrides, etc). These are throwaway dev
// tools with hardcoded emails/values — running one against a production DATABASE_URL
// by accident would silently reset a real person's password or grant free access.
export function confirmDestructive(scriptName: string) {
  if (process.env.CONFIRM_DESTRUCTIVE !== 'yes') {
    console.error(
      `Refusing to run "${scriptName}": this script mutates real data (passwords, payments, etc).\n` +
      `Re-run with CONFIRM_DESTRUCTIVE=yes if you're sure DATABASE_URL points at the database you intend to modify.`
    );
    process.exit(1);
  }
}
