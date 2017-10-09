import React, { Component } from 'react'

import Content from '/imports/ui/components/Content'

class PrivacyPolicyPage extends Component {

  render() {
    return (
      <Content>
        <div style={styles.container}>
          <h1 style={styles.header}>Privacy Policy</h1>
          <div>
            <div style={styles.block}>
              United Way of Central Indiana (“UWCI”) respects your privacy and is committed to protecting it through our compliance with this privacy policy (the "Privacy Policy")
            </div>
            <div style={styles.block}>
              This Privacy Policy is designed to provide you with information about how we collect, store, and use non-personally identifiable and personally identifiable information obtained through our website.  By visiting our website, which operates BoardServeIndy you are accepting the practices described in this Privacy Policy.
            </div>
            <div style={styles.block}>
              This Privacy Policy applies only to UWCI websites.  Any use of any of our websites, including any dispute relating to privacy, is subject to this Privacy Policy and the applicable Terms of Use. UWCI is not responsible for the privacy policy or content of any third-party website linked to our website. Please check with these third-party organizations or companies for their specific privacy policies. 
            </div>
          </div>
          <h2 style={styles.subSubHeader}>Information Collection, Use, and Sharing</h2>
          <div style={styles.block}>
            We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone. 
          </div>
          <div style={styles.block}>
            In order to access the services we provide on the BoardServeIndy website, you must become a Registered User by submitting various information. This information is collected and maintained by BoardServeIndy. Your collected information becomes visible to other Registered Users as your profile only after you have made this designation on the website. Your BoardServeIndy profile includes the information we collected when you applied to join BoardServeIndy and any information that you provide thereafter. We reserve the right to collect and store any information you enter on our website or provide to us in some other manner.
          </div>
          <div style={styles.block}>
            Unless you ask us not to, we may contact you in the future to tell you about United Way’s work in our community and opportunities for you to engage in our community through United Way, or changes to this privacy policy.
          </div>
          <h2 style={styles.subSubHeader}>For Mission-Aligned Nonprofits Seeking Board/Committee Members</h2>
          <div>
            The United Way of Central Indiana (UWCI) believes that high functioning or "healthy" boards are key assets for building organizational capacity. Healthy boards enable organizations to respond strategically to new challenges and to garner the human & financial resources needed to strengthen, stabilize and sustain their organizations. This is why UWCI is committed to strengthening the capacity of our agencies and partners.
          </div>
          <h2 style={styles.subSubHeader}>Your Access to and Control Over Information</h2>
          <div style={styles.block}>
            You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website: <a href="http://uwci.org/contact-us">http://uwci.org/contact-us</a>. 
          </div>
        </div>
      </Content>
    )
  }

}

const styles = {
  block: {
    margin: '0 0 16px 0',
  },

  header: {
    color: '#0091ea',
  },

  subSubHeader: {
    color: '#0091ea',
    fontSize: '16px'
  },

  container: {
    marginBottom: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '14px',
    maxWidth: '700px'
  },
}

export default PrivacyPolicyPage