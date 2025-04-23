export const validateField = (name: string, value: string): string | undefined => {
    const today = new Date().toISOString().split('T')[0];
    const currentDate = new Date(today);
  
    switch (name) {
      case 'clientName':
      case 'clientAddress':
      case 'contractNumber':
        if (!value.trim()) return 'This field is required';
        break;
  
      case 'clientEmail':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Invalid email format';
        break;
  
      case 'clientPhone':
        if (!value.trim()) return 'Phone is required';
        const phoneRegex = /^[0-9]{9,15}$/;
        if (!phoneRegex.test(value)) return 'Invalid phone number';
        break;
  
      case 'contractDate':
        if (!value.trim()) return 'Contract date is required';
        const selectedDate = new Date(value);
        if (selectedDate > currentDate) return 'Contract date cannot be in the future';
        break;
  
      case 'contractValue':
        if (!value.trim()) return 'Contract value is required';
        if (isNaN(Number(value)) || Number(value) <= 0) return 'Must be a positive number';
        break;
  
      default:
        break;
    }
  };
  