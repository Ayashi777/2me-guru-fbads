// Add a declaration for the dataLayer to avoid TypeScript errors
// This allows us to access window.dataLayer without the compiler complaining.
declare global {
    interface Window {
        dataLayer: any[];
    }
}

/**
 * Tracks a lead generation conversion event in Google Tag Manager.
 * This function should be called after a form is successfully submitted.
 */
export const trackConversion = (): void => {
  // Ensure dataLayer exists
  window.dataLayer = window.dataLayer || [];
  
  const eventData = {
    event: 'generate_lead',
    lead_source: 'contact_form',
    timestamp: new Date().toISOString(),
  };

  window.dataLayer.push(eventData);

  console.log('Analytics Event Pushed:', eventData);
};
