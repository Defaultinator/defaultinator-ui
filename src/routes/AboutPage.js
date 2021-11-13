import {
  Container,
  Typography,
} from "@material-ui/core";

const AboutPage = () => {
  return (
    <Container>
      <Typography variant={'h4'} gutterBottom>
        About
      </Typography>
      <Typography variant={'body1'} paragraph>
        Defaultinator is a data repository for storing and querying default passwords for common devices and applications.
        This tool is designed to support defenders looking to harden their attack surface and minimize their vulnerability
        to CWE-798 (https://cwe.mitre.org/data/definitions/798.html) as well as aiding them in assessing their compliance
        with consumer protection legislation.
      </Typography>
      <Typography variant={'h5'} gutterBottom>
        Use Cases
      </Typography>
      <Typography variant={'body1'} paragraph>
        The following sections outline the two primary usecases of Blue Team Audit and Threat Intelligence tracking.
      </Typography>
      <Typography variant={'h6'} gutterBottom>
        Blue Team Audit
      </Typography>
      <Typography variant={'body1'} paragraph>
        Default credentials are generally considered a Bad Thing especially in internet connected IoT devices. Aside from
        being pre-programmed into your home router, default passwords can come from a variety of sources. Many applications
        have hardcoded credentials that are readily accessible on GitHub (even clearly documented), or have documentation
        that displays a default deployment configuration that uses sample credentials which are often just copied and
        pasted by developers. It can be difficult to audit if you are using default credentials in your own environment,
        so Defaultinator was developed to facilitate the process of eliminating these unwanted credentials from your own
        environment.
      </Typography>
      <Typography variant={'h6'} gutterBottom>
        Threat Intelligence
      </Typography>
      <Typography variant={'body1'} paragraph>
        Many malicious actors use default or weak credentials to obtain an initial foothold in a network or grow their
        botnets. They distribute malware with credential lists for devices they hope to find and target. Threat researchers
        can use this database to reverse engineer shifts in targets from threat actors. For example, if you notice a
        particular malware family has added new credentials to their bruteforce payload, you can look those new credentials
        up in Defaultinator to find the device families that are potentially using those credentials as defaults, therefore
        identifying a TTP shift.
      </Typography>
      <Typography variant={'h6'} gutterBottom>
        Contributing
      </Typography>
      <Typography variant={'body1'} paragraph>
        All records are saved via community contributions. If you use this service to find a default credential and are unable
        to find it, we ask you please contribute back once you find them and include the reference that you used in your
        submission. Some common places to find default credentials are device manuals, software documentation, GitHub source
        code, DockerHub documentation, and online tutorials that give sample commands for infrastructure deployment.
      </Typography>
    </Container>
  );
};

export default AboutPage;