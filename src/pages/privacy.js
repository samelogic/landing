import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box, List } from "../components/Core";

const Privacy = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg="9" xl="8">
                <Title variant="hero" className="text-center">
                Privacy Policy
                </Title>
                <Text variant="small" mb="30px">
                This Privacy Policy describes Our policies and procedures on the collection,
use and disclosure of Your information when You use the Service and tells You
about Your privacy rights and how the law protects You.
                </Text>
                <Text variant="small">
                We use Your Personal data to provide and improve the Service. By using the
Service, You agree to the collection and use of information by
this Privacy Policy.
                </Text>


                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2.5rem" mb="30px">
                    Interpretation and Definitions
                  </Title>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Interpretation
                  </Title>
                  <Text variant="small" mb="30px">
                  The words in which the initial letter is capitalized have meanings defined
under the following conditions. The following definitions shall have the same
meaning regardless of whether they appear singular or plural.
                  </Text>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Definitions
                  </Title>
                  <Text variant="small" mb="10px">
                  For these Terms of Service:
                  </Text>
                  <List>
                    <li>
                      Affiliate means an entity that controls is c” "We,” "Us," or "Our" in this
                      Agreement) refers to Samelogic, Inc., 8 The Green STE B Dover, DE 19901.
                    </li>
                    <li>
                    Account means a unique account created for You to access our Service or
                    parts of our Service.
                    </li>
                    <li>
                    Business, for the CCPA (Cali” "We,” "Us" or "Our" in this
                    Agreement) refers to Samelogic, Inc., 8 The Green STE B Dover DE 19901.
                    </li>
                    <li>
                    Consumer, for the CCPA (California Consumer Privacy Act),
                    means a natural person who is a California resident. A resident, as
                    defined in the law, includes (1) every individual who is in the USA for
                    other than a temporary or transitory purpose, and (2) every individual who
                    is domiciled in the USA, which is outside the USA for a temporary or
                    transitory purpose.
                    </li>
                    <li>
                    Cookies are small files that are placed on Your computer, mobile device or
                    any other device by a website containing the details of Your browsing
                    history on that website among its many uses.
                    </li>
                    <li>
                    Country refers to Delaware, United States.
                    </li>
                    <li>
                    Device means any device that can access the Service such as a computer, a
                    cellphone or a digital tablet.
                    </li>
                    <li>
                    Personal Data is any information that relates to an identified or
                    identifiable individual.
                    </li>
                    <li>
                    For the CCPA, Personal Data means any information that
                    identifies, relates to, describes, or is capable of being associated with,
                    or could reasonably be linked, directly or indirectly, with You.
                    </li>
                    <li>
                    Sale, for the CCPA (California Consumer Privacy Act),
                    means selling, renting, releasing, disclosing, disseminating, making
                    available, transferring, or otherwise communicating orally, in writing, or
                    by electronic or other means, a Consumer's personal information to another
                    business or a third party for monetary or other valuable consideration.
                    </li>
                    <li>
                    Service refers to the Website.
                    </li>
                    <li>
                    Service Provider means any natural or legal person who processes the data
                    on behalf of the Company. It refers to third-party companies or
                    individuals employed by the Company to facilitate the Service, to provide
                    the Service on behalf of the Company, to perform services related to the
                    Service or to assist the Company in analyzing how the Service is used.
                    </li>
                    <li>
                    Third-party Social Media Service refers to any website or any social
                    network website through which a user can log in or create an account to
                    use the Service.
                    </li>
                    <li>
                    Usage Data refers to data collected automatically, either generated by the
                    use of the Service or from the Service infrastructure itself (for example,
                    the duration of a page visit).
                    </li>
                    <li>
                    Website refers to Samelogic, accessible from <a href="">Samelogic | Product Experiments with Microsurveys</a>
                    </li>
                    <li>
                    You means the individual accessing or using the Service or the company,
                    or other legal entity on behalf of which such individual is accessing or
                    using the Service, as applicable.
                    </li>
                  </List>
                  
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2.5rem" mb="30px">
                    Collecting and Using Your Personal Data
                  </Title>
                  <Title variant="card" fontSize="2rem" mb="30px">
                  Types of Data Collected
                  </Title>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="1.5rem" mb="30px">
                  Personal Data
                  </Title>
                  <Text variant="small" mb="10px">
                    While using Our Service, We may ask You to provide Us with certain personally
identifiable information that can be used to contact or identify You.
Personally identifiable information may include, but is not limited to:
                  </Text>
                  <List>
                    <li>
                    Email address
                    </li>
                    <li>
                    First name and last name
                    </li>
                    <li>
                    Phone number
                    </li>
                    <li>
                    Address, State, Province, ZIP/Postal code, City
                    </li>
                    <li>
                    Bank account information in order to pay for products and/or services
                      within the Service
                      </li>
                    <li>
                    Usage Data
                    </li>
                  </List>
                  <Text variant="small" mb="10px">
                  When You pay for a product and/or a service via bank transfer, We may ask You
to provide information to facilitate this transaction and to verify Your
identity. Such information may include, without limitation:
                  </Text>
                  <List>
                    <li>
                    Date of birth
                    </li>
                    <li>
                    Passport or National ID card
                    </li>
                    <li>
                    Bank card statement
                    </li>
                    <li>
                    Other information linking You to an address
                    </li>
                  </List>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2.2rem" mb="30px">
                  Usage Data
                  </Title>
                  <Text variant="small" mb="10px">
                  Usage Data is collected automatically when using the Service.
                  </Text>
                  <Text variant="small" mb="10px">
                  Usage Data may include information such as Your Device's Internet Protocol
address (e.g. IP address), browser type, browser version, the pages of our
Service that You visit, the time and date of Your visit, the time spent on
those pages, unique device identifiers and other diagnostic data.
                  </Text>
                  <Text variant="small" mb="10px">
                  When You access the Service by or through a mobile device, We may collect
certain information automatically, including, but not limited to, the type of
mobile device You use, Your mobile device unique ID, the IP address of Your
mobile device, Your mobile operating system, the type of mobile Internet
browser You use, unique device identifiers and other diagnostic data.
                  </Text>
                  <Text variant="small" mb="10px">
                  We may also collect information that Your browser sends whenever You visit our
Service or when You access the Service by or through a mobile device.
                  </Text>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2.2rem" mb="30px">
                  Information from Third-Party Social Media Services
                  </Title>
                  <List>
                    <li>
                    Google
                    </li>
                    <li>
                    Facebook
                    </li>
                    <li>
                    Twitter
                    </li>
                  </List>
                  <Text variant="small" mb="10px">
                  If You decide to register through or otherwise grant us access to a Third-
Party Social Media Service, We may collect Personal data that is already
associated with Your Third-Party Social Media Service's account, such as Your
name, Your email address, Your activities, or Your contact list associated with
that account.
                  </Text>
                  <Text variant="small" mb="10px">
                  You may also have the option of sharing additional information with the
The company through Your Third-Party Social Media Service's account. If You choose
to provide such information and Personal Data during registration or
otherwise, You are giving the Company permission to use, share, and store it
in a manner consistent with this Privacy Policy.
                  </Text>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2.2rem" mb="30px">
                  Tracking Technologies and Cookies
                  </Title>
                  <Text variant="small" mb="10px">
                  We use Cookies and similar tracking technologies to track the activity on Our
Service and store certain information. Tracking technologies used are beacons,
tags, and scripts to collect and track information and to improve and analyze
Our Service. The technologies We use may include:
                  </Text>
                  <List>
                    <li>
                    Cookies or Browser Cookies. A cookie is a small file placed on Your
    Device. You can instruct Your browser to refuse all Cookies or to indicate
    when a Cookie is being sent. However, if You do not accept Cookies, You
    may not be able to use some parts of our Service. Unless you have adjusted
    Your browser setting so that it will refuse Cookies, our Service may use
    Cookies.
                    </li>
                    <li>
                    Flash Cookies. Certain features of our Service may use local stored
    objects (or Flash Cookies) to collect and store information about Your
    preferences or Your activity on our Service. Flash Cookies are not managed
    by the same browser settings as those used for Browser Cookies. For more
    information on how You can delete Flash Cookies, please read "Where can I
    change the settings for disabling, or deleting local shared objects?"
    available at <a>https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_</a>
                    </li>
                    <li>
                    Web Beacons. Certain sections of our Service and our emails may contain
    small electronic files known as web beacons (also referred to as clear
    gifs, pixel tags, and single-pixel gifs) that permit the Company, for
    example, to count users who have visited those pages or opened an email
    and for other related website statistics (for example, recording the
    popularity of a certain section and verifying system and server
    integrity).
                    </li>
                  </List>
                  
                  <Text variant="small" mb="10px">
                  Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on
Your personal computer or mobile device when You go offline, while Session
Cookies are deleted as soon as You close Your web browser. You can learn more
about cookies here: [All About Cookies by
TermsFeed](https://www.termsfeed.com/blog/cookies/).
                  </Text>
                  <Text variant="small" mb="10px">
                  We use both Session and Persistent Cookies for the purposes set out below:
                  </Text>
                  <List>
                    <li>
                    Necessary / Essential Cookies

                    Type: Session Cookies

                    Administered by: Us

                    Purpose: These Cookies are essential to provide You with services
                    available through the Website and to enable You to use some of its
                    features. They help to authenticate users and prevent fraudulent use of
                    user accounts. Without these Cookies, the services that You have asked for
                    cannot be provided, and We only use these Cookies to provide You with
                    those services.
                    </li>
                    <li>
                    Cookies Policy / Notice Acceptance Cookies

                    Type: Persistent Cookies

                    Administered by: Us

                    Purpose: These Cookies identify if users have accepted the use of cookies
                    on the Website.
                    </li>
                    <li>
                    Functionality Cookies

                    Type: Persistent Cookies

                    Administered by: Us

                    Purpose: These Cookies allow us to remember choices You make when You use
                    the Website, such as remembering your login details or language
                    preference. The purpose of these Cookies is to provide You with a more
                    personal experience and to avoid You having to re-enter your preferences
                    every time You use the Website.
                    </li>
                    <li>
                    Tracking and Performance Cookies

                    Type: Persistent Cookies

                    Administered by: Third-Parties

                    Purpose: These Cookies are used to track information about traffic to the
                    Website and how users use the Website. The information gathered via these
                    Cookies may directly or indirectly identify you as an individual visitor.
                    This is because the information collected is typically linked to a
                    pseudonymous identifier associated with the device you use to access the
                    Website. We may also use these Cookies to test new pages, features or new
                    functionality of the Website to see how our users react to them.
                    </li>
                  </List>
                  <Text variant="small" mb="10px">
                  For more information about the cookies we use and your choices regarding
cookies, please visit our Cookies Policy or the Cookies section of our Privacy
Policy.
                  </Text>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2.2rem" mb="30px">
                  Use of Your Personal Data
                  </Title>
                  <Text variant="small" mb="10px">
                  The Company may use Personal Data for the following purposes:
                  </Text>
                  <List>
                    <li>
                    To provide and maintain our Service , including to monitor the usage of
    our Service.
                    </li>
                    <li>
                    To manage Your Account: to manage Your registration as a user of the
    Service. The Personal Data You provide can give You access to different
    functionalities of the Service that are available to You as a registered
    user.
                    </li>
                    <li>
                    For the performance of a contract: the development, compliance and
    undertaking of the purchase contract for the products, items or services
    You have purchased or of any other contract with Us through the Service.
                    </li>
                    <li>
                    To contact You: To contact You by email, telephone calls, SMS, or other
    equivalent forms of electronic communication, such as a mobile
    application's push notifications regarding updates or informative
    communications related to the functionalities, products or contracted
    services, including the security updates, when necessary or reasonable for
    their implementation.
                    </li>
                    <li>
                    To provide You with news, special offers and general information about
    other goods, services and events which we offer that are similar to those
    that you have already purchased or enquired about unless You have opted
    not to receive such information.
                    </li>
                    <li>
                    To manage Your requests: To attend and manage Your requests to Us.
                    </li>
                    <li>
                    For business transfers: We may use Your information to evaluate or conduct
    a merger, divestiture, restructuring, reorganization, dissolution, or
    other sale or transfer of some or all of Our assets, whether as a going
    concern or as part of bankruptcy, liquidation, or similar proceeding, in
    which Personal Data held by Us about our Service users is among the assets
    transferred.
                    </li>
                    <li>
                    For other purposes : We may use Your information for other purposes, such
    as data analysis, identifying usage trends, determining the effectiveness
    of our promotional campaigns and to evaluate and improve our Service,
    products, services, marketing and your experience.
                    </li>
                  </List>
                  
                  <Text variant="small" mb="10px">
                  We may share Your personal information in the following situations:
                  </Text>
                  <List>
                    <li>
                    With Service Providers: We may share Your personal information with
    Service Providers to monitor and analyze the use of our Service, for
    payment processing, to contact You.
                   </li>
                    <li>
                    For business transfers: We may share or transfer Your personal information
    in connection with, or during negotiations of, any merger, sale of Company
    assets, financing, or acquisition of all or a portion of Our business to
    another company.
                    </li>
                    <li>
                    With Affiliates: We may share Your information with Our affiliates, in
    which case we will require those affiliates to honor this Privacy Policy.
    Affiliates include Our parent company and any other subsidiaries, joint
    venture partners or other companies that We control or that are under
    common control with Us.
                    </li>
                    <li>
                    With business partners: We may share Your information with Our business
    partners to offer You certain products, services or promotions.
                    </li>
                    <li>
                    With other users: when You share personal information or otherwise
    interact in the public areas with other users, such information may be
    viewed by all users and may be publicly distributed outside. If You
    interact with other users or register through a Third-Party Social Media
    Service, Your contacts on the Third-Party Social Media Service may see
    Your name, profile, pictures and description of Your activity. Similarly,
    other users will be able to view descriptions of Your activity,
    communicate with You and view Your profile.
                    </li>
                    <li>
                    With Your consent : We may disclose Your personal information for any
    other purpose with Your consent.
                    </li>
                  </List>
                  <Text variant="small" mb="10px">
                  For more information about the cookies we use and your choices regarding
cookies, please visit our Cookies Policy or the Cookies section of our Privacy
Policy.
                  </Text>
                </Box>



                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2.2rem" mb="30px">
                  Retention of Your Personal Data  
                  </Title>
                  <Text variant="small" mb="10px">
                  The Company will retain Your Personal Data only for as long as is necessary
for the purposes set out in this Privacy Policy. We will retain and use Your
Personal Data to the extent necessary to comply with our legal obligations
(for example, if we are required to retain your data to comply with applicable
laws), resolve disputes, and enforce our legal agreements and policies.
                  </Text>
                  <Text variant="small" mb="10px">
                  The Company will also retain Usage Data for internal analysis purposes. Usage
Data is generally retained for a shorter period of time, except when this data
is used to strengthen the security or to improve the functionality of Our
Service, or We are legally obligated to retain this data for longer time
periods.
                  </Text>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2.2rem" mb="30px">
                  Transfer of Your Personal Data
                  </Title>
                  <Text variant="small" mb="10px">
                  Your information, including Personal Data, is processed at the Company's
operating offices and in any other places where the parties involved in the
processing are located. It means that this information may be transferred to —
and maintained on — computers located outside of Your state, province, country
or other governmental jurisdiction where the data protection laws may differ
than those from Your jurisdiction.
                  </Text>
                  <Text variant="small" mb="10px">
                  Your consent to this Privacy Policy followed by Your submission of such
information represents Your agreement to that transfer.
                  </Text>
                  <Text variant="small" mb="10px">
                  The Company will take all steps reasonably necessary to ensure that Your data
is treated securely and in accordance with this Privacy Policy and no transfer
of Your Personal Data will take place to an organization or a country unless
there are adequate controls in place including the security of Your data and
other personal information.
                  </Text>
                </Box>


                

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Changes to These Terms of Service
                  </Title>
                  <Text variant="small" mb="10px">
                    We reserve the right, at Our sole discretion, to modify or replace these Terms
                    at any time. If a revision is material, We will make reasonable efforts to
                    provide at least 30 days' notice before any new terms taking effect. What
                    constitutes a material change will be determined at Our sole discretion.
                  </Text>
                  <Text variant="small" mb="10px">
                    By continuing to access or use Our Service after those revisions become
                    effective, You agree to be bound by the revised terms. If You do not agree to
                    the new terms, in whole or in part, please stop using the website and the
                    Service.
                  </Text>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Contact Us
                  </Title>
                  <Text variant="small" mb="10px">
                  If you have any questions about these Terms of Service, You can contact us:
                  </Text>
                  <List>
                    <li>By email: hi@samelogic.com</li>
                    <li>By visiting this page on our website: https://samelogic.com/terms</li>
                  </List>
                </Box>
                
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Privacy;
