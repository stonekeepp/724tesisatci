export interface IEmailService {
  sendContactNotification(lead: {
    fullName: string;
    phone: string;
    district?: string;
    serviceType?: string;
    description: string;
  }): Promise<void>;
}

/**
 * Mock email service. Replace with SMTP/transactional mail in production.
 * Configure SMTP_HOST, SMTP_USER, SMTP_PASS in .env
 */
export class MockEmailService implements IEmailService {
  async sendContactNotification(lead: {
    fullName: string;
    phone: string;
    district?: string;
    serviceType?: string;
    description: string;
  }): Promise<void> {
    // TODO: Implement SMTP when SMTP_HOST is configured
    console.log("[MockEmailService] Contact lead received:", lead);
  }
}

export const emailService = new MockEmailService();
