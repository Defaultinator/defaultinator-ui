import {
  Container,
  Typography,
} from "@mui/material";

const TermsPage = () => {
  return (
    <Container>
      <Typography variant={'h4'} gutterBottom>
        Don't do bads
      </Typography>
      <Typography variant={'body1'} paragraph>
        “Defaultinator” is intended to be used for good-faith testing, investigation, and
        mitigation of security flaws so that individuals and organizations can be safer.
        Defaultinator is not intended to be used to target or scan networks, systems, or
        assets without authorization, nor is Defaultinator intended to receive or maintain
        the credentials or personal information of any individual. Defaultinator users
        should follow the law. By using this tool, you agree to indemnify Defaultinator
        software developers from any liability or costs arising from a third party claim
        associated with your use of Defaultinator.
      </Typography>
    </Container>
  );
};

export default TermsPage;