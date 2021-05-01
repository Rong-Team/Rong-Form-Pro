export function warning(valid: boolean, message: string) {
    if ( !valid && console !== undefined) {
      console.error(`Warning: ${message}`);
    }
  }


export function mapSize(size:'xs'|'sm'|'md'|'lg'){
    switch (size) {
      case "sm":
        
        return {
          padding:'3.2rem'
        }
      case 'md':
        return {
          padding:'4.5rem'
        }
      case 'lg':{
        return {padding:'5.6rem'}
      }
    
      default:
        return {
          padding:'2.4rem'
        };
    }
}
  