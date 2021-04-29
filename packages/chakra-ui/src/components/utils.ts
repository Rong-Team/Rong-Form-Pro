export function warning(valid: boolean, message: string) {
    if ( !valid && console !== undefined) {
      console.error(`Warning: ${message}`);
    }
  }
  