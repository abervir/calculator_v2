export class SharedUtils {
  static copyTextToClipboard(value: string): void {
    navigator.clipboard.writeText(value);
  }
}
