import React from 'react';

const DataDeletionInstructions = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>How to Delete Your User Data from Ajnabee Partner</h1>
      <p style={styles.paragraph}>
        At Ajnabee Partner, we prioritize your privacy and data security. If you wish to delete your user data, please follow these simple steps:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Compose an Email:</strong> Open your preferred email client and compose a new email.
        </li>
        <li style={styles.listItem}>
          <strong>Recipient:</strong> Address the email to our support team at{' '}
          <a href="mailto:ajnbaee.care@gmail.com" style={styles.emailLink}>ajnbaee.care@gmail.com</a>.
        </li>
        <li style={styles.listItem}>
          <strong>Subject Line:</strong> Include "Request for Data Deletion" in the subject line to ensure your request is processed promptly.
        </li>
        <li style={styles.listItem}>
          <strong>Email Body:</strong> In the body of the email, please include the following details:
          <ul style={styles.subList}>
            <li style={styles.subListItem}>Your full name</li>
            <li style={styles.subListItem}>Your registered email address</li>
            <li style={styles.subListItem}>A clear statement requesting the deletion of your user data and account</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Send the Email:</strong> Once all the information is included, send the email to us.
        </li>
      </ul>
      <p style={styles.paragraph}>
        Our support team will process your request and delete your data from our servers. You will receive a confirmation email once the process is complete.
      </p>
      <p style={styles.paragraph}>
        Thank you for using Ajnabee Partner. We are committed to protecting your privacy and ensuring your data is handled with care.
      </p>
      <p style={styles.paragraph}>
        For any further queries or assistance, feel free to reach out to us at{' '}
        <a href="mailto:ajnbaee.care@gmail.com" style={styles.emailLink}>ajnbaee.care@gmail.com</a>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    margin: '0',
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  header: {
    color: '#333',
  },
  paragraph: {
    color: '#555',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    background: '#eee',
    margin: '10px 0',
    padding: '10px',
    borderLeft: '4px solid #007BFF',
  },
  subList: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  subListItem: {
    background: 'none',
    padding: '0',
    borderLeft: 'none',
  },
  emailLink: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default DataDeletionInstructions;
