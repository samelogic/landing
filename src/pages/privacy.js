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
                  <Title variant="card" fontSize="2.5rem" mb="30px">
                  Disclosure of Your Personal Data  
                  </Title>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Business Transactions  
                  </Title>
                  <Text variant="small" mb="10px">
                  If the Company is involved in a merger, acquisition or asset sale, Your
Personal Data may be transferred. We will provide notice before Your Personal
Data is transferred and becomes subject to a different Privacy Policy.
                  </Text>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Law enforcement 
                  </Title>
                  <Text variant="small" mb="10px">
                  Under certain circumstances, the Company may be required to disclose Your
Personal Data if required to do so by law or in response to valid requests by
public authorities (e.g. a court or a government agency).
                  </Text>
                  
                  <Title variant="card" fontSize="2rem" mb="30px">
                  Other legal requirements   
                  </Title>
                  <Text variant="small" mb="10px">
                  The Company may disclose Your Personal Data in the good faith belief that such
action is necessary to:
                  </Text>
                  <List>
                    <li>Comply with a legal obligation</li>
                    <li>Protect and defend the rights or property of the Company</li>
                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>Protect the personal safety of Users of the Service or the public</li>
                    <li>Protect against legal liability</li>
                  </List>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Security of Your Personal Data 
                  </Title>
                  <Text variant="small" mb="10px">
                  The security of Your Personal Data is important to Us, but remember that no
method of transmission over the Internet, or method of electronic storage is
100% secure. While We strive to use commercially acceptable means to protect
Your Personal Data, We cannot guarantee its absolute security.
                  </Text>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2.5rem" mb="30px">
                  Detailed Information on the Processing of Your Personal Data 
                  </Title>
                  <Text variant="small" mb="10px">
                  The Service Providers We use may have access to Your Personal Data. These
third-party vendors collect, store, use, process and transfer information
about Your activity on Our Service in accordance with their Privacy Policies.
                  </Text>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Analytics
                  </Title>
                  <Text variant="small" mb="10px">
                  We may use third-party Service providers to monitor and analyze the use of our
Service.
                  </Text>
                  <List>
                    <li>Google Analytics

Google Analytics is a web analytics service offered by Google that tracks
and reports website traffic. Google uses the data collected to track and
monitor the use of our Service. This data is shared with other Google
services. Google may use the collected data to contextualize and
personalize the ads of its own advertising network.

You can opt-out of having made your activity on the Service available to
Google Analytics by installing the Google Analytics opt-out browser add-
on. The add-on prevents the Google Analytics JavaScript (ga.js,
analytics.js and dc.js) from sharing information with Google Analytics
about visits activity.

For more information on the privacy practices of Google, please visit the
Google Privacy & Terms web page: https://policies.google.com/privacy</li>
                    <li>Firebase

Firebase is an analytics service provided by Google Inc.

You may opt-out of certain Firebase features through your mobile device
settings, such as your device advertising settings or by following the
instructions provided by Google in their Privacy Policy:
https://policies.google.com/privacy

We also encourage you to review the Google's policy for safeguarding your
data: https://support.google.com/analytics/answer/6004245

For more information on what type of information Firebase collects, please
visit the How Google uses data when you use our partners' sites or apps
webpage: https://policies.google.com/technologies/partner-sites</li>
                    <li>Matomo

Matomo is a web analytics service. You can visit their Privacy Policy page
here: https://matomo.org/privacy-policy</li>
                    <li>Clicky

Clicky is a web analytics service. Read the Privacy Policy for Clicky
here: https://clicky.com/terms</li>
                    <li>Statcounter

Statcounter is a web traffic analysis tool. You can read the Privacy
Policy for Statcounter here: https://statcounter.com/about/legal</li>
                    <li>Flurry Analytics

Flurry Analytics service is provided by Yahoo! Inc.

You can opt-out from Flurry Analytics service to prevent Flurry Analytics
from using and sharing your information by visiting the Flurry's Opt-out
page: https://developer.yahoo.com/flurry/end-user-opt-out/

For more information on the privacy practices and policies of Yahoo!,
please visit their Privacy Policy page:
https://policies.yahoo.com/xa/en/yahoo/privacy/index.htm</li>
                    <li>Mixpanel

Mixpanel is provided by Mixpanel Inc.

You can prevent Mixpanel from using your information for analytics
purposes by opting-out. To opt-out of Mixpanel service, please visit this
page: https://mixpanel.com/optout/

For more information on what type of information Mixpanel collects, please
visit the Terms of Use page of Mixpanel: https://mixpanel.com/terms/</li>
                    <li>Unity Analytics

Unity Analytics is provided by Unity Technologies.

Unity Analytics collects, stores, uses, processes, and transfers personal
information to provide, operate, and improve Unity Technologies services,
including personalized advertising services. For more information on what
type of information Unity Technologies collects, please visit their
Privacy Policy page: https://unity3d.com/legal/privacy-policy

You can prevent Unity Analytics from using your information by opting-out.
To opt-out of Unity Analytics, please visit this page:
https://unity3d.com/legal/privacy-policy

You may opt-out of all personalized advertising by enabling privacy
features on Your mobile device such as Limit Ad Tracking (iOS) and Opt Out
of Ads Personalization (Android). See Your mobile device Help system for
more information.</li>
                    <li>Heap Analytics

Their Privacy Policy can be viewed at https://heapanalytics.com/</li>
                    <li>Ahefs

Their Privacy Policy can be viewed at https://ahrefs.com/</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </List>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Email Marketing
                  </Title>
                  <Text variant="small" mb="10px">
                  We may use Your Personal Data to contact You with newsletters, marketing or
promotional materials and other information that may be of interest to You.
You may opt-out of receiving any, or all, of these communications from Us by
following the unsubscribe link or instructions provided in any email We send
or by contacting Us.
                  </Text>
                  <Text variant="small" mb="10px">
                  We may use Email Marketing Service Providers to manage and send emails to You.
                  </Text>
                  <List>
                    <li>Mailchimp

Mailchimp is an email marketing sending service provided by The Rocket
Science Group LLC.

For more information on the privacy practices of Mailchimp, please visit
their Privacy policy: https://mailchimp.com/legal/privacy/</li>
                    <li>AWeber

AWeber is an email marketing sending service provided by AWeber
Communications.

For more information on the privacy practices of AWeber, please visit
their Privacy policy: https://www.aweber.com/privacy.htm</li>
                    <li>GetResponse

GetResponse is an email marketing sending service provided by GetResponse.

For more information on the privacy practices of GetResponse, please visit
their Privacy policy: https://www.getresponse.com/legal/privacy.html</li>
                  </List>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Payments
                  </Title>
                  <Text variant="small" mb="10px">
                  We may provide paid products and/or services within the Service. In that case,
we may use third-party services for payment processing (e.g. payment
processors).
                  </Text>
                  <Text variant="small" mb="10px">
                  We will not store or collect Your payment card details. That information is
provided directly to Our third-party payment processors whose use of Your
personal information is governed by their Privacy Policy. These payment
processors adhere to the standards set by PCI-DSS as managed by the PCI
Security Standards Council, which is a joint effort of brands like Visa,
Mastercard, American Express and Discover. PCI-DSS requirements help ensure
the secure handling of payment information.
                  </Text>
                  <List>
                    <li>Apple Store In-App Payments

Their Privacy Policy can be viewed at
https://www.apple.com/legal/privacy/en-ww/</li>
                    <li>Google Play In-App Payments

Their Privacy Policy can be viewed at
https://www.google.com/policies/privacy/</li>
                    <li> Stripe

Their Privacy Policy can be viewed at https://stripe.com/us/privacy</li>
                    <li>WePay

Their Privacy Policy can be viewed at https://go.wepay.com/privacy-policy</li>
                    <li>WorldPay

Their Privacy Policy can be viewed at https://www.worldpay.com/en-gb/privacy-policy</li>
                    <li>PayPal

Their Privacy Policy can be viewed at
https://www.paypal.com/webapps/mpp/ua/privacy-full</li>
                    <li>Braintree

Their Privacy Policy can be viewed at
https://www.braintreepayments.com/legal/braintree-privacy-policy</li>
                    <li>FastSpring

Their Privacy Policy can be viewed at http://fastspring.com/privacy/</li>
                    <li>2Checkout

Their Privacy Policy can be viewed at
https://www.2checkout.com/policies/privacy-policy</li>
                    <li>Sage Pay

Their Privacy Policy can be viewed at https://www.sagepay.co.uk/policies</li>
                    <li>Square

Their Privacy Policy can be viewed at https://squareup.com/legal/privacy-no-account</li>
                    <li>Go Cardless

Their Privacy Policy can be viewed at https://gocardless.com/en-eu/legal/privacy/</li>
                    <li>Elavon

Their Privacy Policy can be viewed at https://www.elavon.com/privacy-pledge.html</li>
                    <li>Verifone

Their Privacy Policy can be viewed at
https://www.verifone.com/en/us/legal</li>
                    <li>Moneris

Their Privacy Policy can be viewed at https://www.moneris.com/en/Privacy-Policy</li>
                    <li>WeChat

Their Privacy Policy can be viewed at
https://www.wechat.com/en/privacy_policy.html</li>
                    <li>Alipay

Their Privacy Policy can be viewed at
https://render.alipay.com/p/f/agreementpages/alipayglobalprivacypolicy.html</li>
                  </List>
                  <Text variant="small" mb="10px">
                  When You use Our Service to pay a product and/or service via bank transfer, We
may ask You to provide information to facilitate this transaction and to
verify Your identity.
                  </Text>
                </Box>


                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2.5rem" mb="30px">
                  CCPA Privacy
                  </Title>
                  <Text variant="small" mb="10px">
                  This privacy notice section for California residents supplements the
information contained in Our Privacy Policy and it applies solely to all
visitors, users, and others who reside in the State of California.
                  </Text>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Categories of Personal Information Collected 
                  </Title>
                  <Text variant="small" mb="10px">
                  We collect information that identifies, relates to, describes, references, is
capable of being associated with, or could reasonably be linked, directly or
indirectly, with a particular Consumer or Device. The following is a list of
categories of personal information which we may collect or may have been
collected from California residents within the last twelve (12) months.
                  </Text>
                  <Text variant="small" mb="10px">
                  Please note that the categories and examples provided in the list below are
those defined in the CCPA. This does not mean that all examples of that
category of personal information were in fact collected by Us, but reflects
our good faith belief to the best of our knowledge that some of that
information from the applicable category may be and may have been collected.
For example, certain categories of personal information would only be
collected if You provided such personal information directly to Us.
                  </Text>

                  <List>
                    <li>Category A: Identifiers.

Examples: A real name, alias, postal address, unique personal identifier,
online identifier, Internet Protocol address, email address, account name,
driver's license number, passport number, or other similar identifiers.

Collected: Yes.</li>
                    <li>Category B: Personal information categories listed in the California
    Customer Records statute (Cal. Civ. Code § 1798.80(e)).

    Examples: A name, signature, Social Security number, physical
    characteristics or description, address, telephone number, passport
    number, driver's license or state identification card number, insurance
    policy number, education, employment, employment history, bank account
    number, credit card number, debit card number, or any other financial
    information, medical information, or health insurance information. Some
    personal information included in this category may overlap with other
    categories.

    Collected: Yes.</li>
                    <li>Category C: Protected classification characteristics under California or
    federal law.

    Examples: Age (40 years or older), race, color, ancestry, national origin,
    citizenship, religion or creed, marital status, medical condition,
    physical or mental disability, sex (including gender, gender identity,
    gender expression, pregnancy or childbirth and related medical
    conditions), sexual orientation, veteran or military status, genetic
    information (including familial genetic information).

    Collected: No.</li>
                    <li>Category D: Commercial information.

Examples: Records and history of products or services purchased or
considered.

Collected: Yes.</li>
                    <li>Category E: Biometric information.

Examples: Genetic, physiological, behavioral, and biological
characteristics, or activity patterns used to extract a template or other
identifier or identifying information, such as, fingerprints, faceprints,
and voiceprints, iris or retina scans, keystroke, gait, or other physical
patterns, and sleep, health, or exercise data.

Collected: No.</li>
                    <li>Category F: Internet or other similar network activity.

Examples: Interaction with our Service or advertisement.

Collected: Yes.</li>
                    <li>Category G: Geolocation data.

Examples: Approximate physical location.

Collected: No.</li>
                    <li>Category H: Sensory data.

Examples: Audio, electronic, visual, thermal, olfactory, or similar
information.

Collected: No.</li>
                    <li>Category I: Professional or employment-related information.

Examples: Current or past job history or performance evaluations.

Collected: No.</li>
                    <li>Category J: Non-public education information (per the Family Educational
    Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)).

    Examples: Education records directly related to a student maintained by an
    educational institution or party acting on its behalf, such as grades,
    transcripts, class lists, student schedules, student identification codes,
    student financial information, or student disciplinary records.

    Collected: No.</li>
                    <li>Category K: Inferences drawn from other personal information.

Examples: Profile reflecting a person's preferences, characteristics,
psychological trends, predispositions, behavior, attitudes, intelligence,
abilities, and aptitudes.

Collected: No.</li>
                  </List>
                  
                  <Text variant="small" mb="10px">
                  Under CCPA, personal information does not include:
                  </Text>
                  <List>
                    <li>Publicly available information from government records</li>
                    <li>Deidentified or aggregated consumer information</li>
                    <li>Information excluded from the CCPA's scope, such as:</li>
                    <ul>
                      <li>Health or medical information covered by the Health Insurance
        Portability and Accountability Act of 1996 (HIPAA) and the California
        Confidentiality of Medical Information Act (CMIA) or clinical trial data</li>
                      <li>Personal Information covered by certain sector-specific privacy laws,
        including the Fair Credit Reporting Act (FRCA), the Gramm-Leach-Bliley
        Act (GLBA) or California Financial Information Privacy Act (FIPA), and
        the Driver's Privacy Protection Act of 1994</li>
                    </ul>
                  </List>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Sources of Personal Information
                  </Title>
                  <Text variant="small" mb="10px">
                  We obtain the categories of personal information listed above from the
following categories of sources:
                  </Text>
                  <List>
                    <li>Directly from You. For example, from the forms You complete on our
    Service, preferences You express or provide through our Service, or from
    Your purchases on our Service.</li>
                    <li>Indirectly from You. For example, from observing Your activity on our
    Service.</li>
                    <li>Automatically from You. For example, through cookies We or our Service
    Providers set on Your Device as You navigate through our Service.</li>
                    <li>From Service Providers. For example, third-party vendors to monitor and
    analyze the use of our Service, third-party vendors for payment
    processing, or other third-party vendors that We use to provide the
    Service to You.</li>
                  </List>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Use of Personal Information for Business Purposes or Commercial Purposes 
                  </Title>
                  <Text variant="small" mb="10px">
                  We may use or disclose personal information We collect for "business purposes"
or "commercial purposes" (as defined under the CCPA), which may include the
following examples:
                  </Text>
                  <List>
                    <li>To operate our Service and provide You with our Service.</li>
                    <li>To provide You with support and to respond to Your inquiries, including to
    investigate and address Your concerns and monitor and improve our Service.</li>
                    <li>To fulfill or meet the reason You provided the information. For example,
    if You share Your contact information to ask a question about our Service,
    We will use that personal information to respond to Your inquiry. If You
    provide Your personal information to purchase a product or service, We
    will use that information to process Your payment and facilitate delivery.</li>
                    <li>To respond to law enforcement requests and as required by applicable law,
    court order, or governmental regulations.</li>
                    <li>As described to You when collecting Your personal information or as
    otherwise set forth in the CCPA.</li>
                    <li>For internal administrative and auditing purposes.</li>
                    <li>To detect security incidents and protect against malicious, deceptive,
    fraudulent or illegal activity, including, when necessary, to prosecute
    those responsible for such activities.</li>
                  </List>
                  <Text variant="small" mb="10px">
                  Please note that the examples provided above are illustrative and not intended
to be exhaustive. For more details on how we use this information, please
refer to the "Use of Your Personal Data" section.
                  </Text>
                  <Text variant="small" mb="10px">
                  If We decide to collect additional categories of personal information or use
the personal information We collected for materially different, unrelated, or
incompatible purposes We will update this Privacy Policy.
                  </Text>


                  <Title variant="card" fontSize="2rem" mb="30px">
                  Disclosure of Personal Information for Business Purposes or Commercial
Purposes 
                  </Title>
                  <Text variant="small" mb="10px">
                  We may use or disclose and may have used or disclosed in the last twelve (12)
months the following categories of personal information for business or
commercial purposes:
                  </Text>
                  <List>
                    <li>Category A: Identifiers</li>
                    <li>Category B: Personal information categories listed in the California
    Customer Records statute (Cal. Civ. Code § 1798.80(e))</li>
                    <li>Category D: Commercial information</li>
                    <li>Category F: Internet or other similar network activity</li>
                  </List>
                  <Text variant="small" mb="10px">
                  Please note that the categories listed above are those defined in the CCPA.
This does not mean that all examples of that category of personal information
were in fact disclosed, but reflects our good faith belief to the best of our
knowledge that some of that information from the applicable category may be
and may have been disclosed.
                  </Text>
                  <Text variant="small" mb="10px">
                  When We disclose personal information for a business purpose or a commercial
purpose, We enter a contract that describes the purpose and requires the
recipient to both keep that personal information confidential and not use it
for any purpose except performing the contract.
                  </Text>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Sale of Personal Information 
                  </Title>
                  <Text variant="small" mb="10px">
                  As defined in the CCPA, "sell" and "sale" mean selling, renting, releasing,
disclosing, disseminating, making available, transferring, or otherwise
communicating orally, in writing, or by electronic or other means, a
consumer's personal information by the business to a third party for valuable
consideration. This means that We may have received some kind of benefit in
return for sharing personal Iinformation, but not necessarily a monetary
benefit.
                  </Text>
                  <Text variant="small" mb="10px">
                  Please note that the categories listed below are those defined in the CCPA.
This does not mean that all examples of that category of personal information
were in fact sold, but reflects our good faith belief to the best of our
knowledge that some of that information from the applicable category may be
and may have been shared for value in return.
                  </Text>
                  <Text variant="small" mb="10px">
                  We may sell and may have sold in the last twelve (12) months the following
categories of personal information:
                  </Text>
                  <List>
                    <li>Category A: Identifiers</li>
                    <li>Category B: Personal information categories listed in the California
    Customer Records statute (Cal. Civ. Code § 1798.80(e))</li>
                    <li>Category D: Commercial information</li>
                    <li>Category F: Internet or other similar network activity</li>
                  </List>


                  <Title variant="card" fontSize="2rem" mb="30px">
                  Share of Personal Information 
                  </Title>
                  <Text variant="small" mb="10px">
                  We may share Your personal information identified in the above categories with
the following categories of third parties:
                  </Text>
                  <List>
                    <li>Service Providers</li>
                    <li>Payment processors</li>
                    <li>Our affiliates</li>
                    <li>Our business partners</li>
                    <li>Third party vendors to whom You or Your agents authorize Us to disclose
    Your personal information in connection with products or services We
    provide to You</li>
                  </List>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Sale of Personal Information of Minors Under 16 Years of Age  
                  </Title>
                  <Text variant="small" mb="10px">
                  We do not sell the personal information of Consumers We actually know are less
than 16 years of age, unless We receive affirmative authorization (the "right
to opt-in") from either the Consumer who is between 13 and 16 years of age, or
the parent or guardian of a Consumer less than 13 years of age. Consumers who
opt-in to the sale of personal information may opt-out of future sales at any
time. To exercise the right to opt-out, You (or Your authorized
representative) may submit a request to Us by contacting Us.
                  </Text>
                  <Text variant="small" mb="10px">
                  If You have reason to believe that a child under the age of 13 (or 16) has
provided Us with personal information, please contact Us with sufficient
detail to enable Us to delete that information.
                  </Text>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Your Rights under the CCPA   
                  </Title>
                  <Text variant="small" mb="10px">
                  The CCPA provides California residents with specific rights regarding their
personal information. If You are a resident of California, You have the
following rights:
                  </Text>
                  <List>
                    <li>The right to notice. You have the right to be notified which categories of
    Personal Data are being collected and the purposes for which the Personal
    Data is being used.</li>
                    <li>The right to request. Under CCPA, You have the right to request that We
    disclose information to You about Our collection, use, sale, disclosure
    for business purposes and share of personal information. Once We receive
    and confirm Your request, We will disclose to You:</li>
                    <ul>
                      <li>The categories of personal information We collected about You</li>
                      <li>The categories of sources for the personal information We collected
      about You</li>
                      <li>Our business or commercial purpose for collecting or selling that
      personal information</li>
                      <li>The categories of third parties with whom We share that personal
      information</li>
                      <li>The specific pieces of personal information We collected about You</li>
                      <li>If we sold Your personal information or disclosed Your personal
      information for a business purpose, We will disclose to You:</li>
                      <ul>
                        <li>The categories of personal information categories sold</li>
                        <li>The categories of personal information categories disclosed</li>
                      </ul>
                    </ul>
                    <li>The right to say no to the sale of Personal Data (opt-out). You have the
    right to direct Us to not sell Your personal information. To submit an
    opt-out request please contact Us.</li>
                    <li>The right to delete Personal Data. You have the right to request the
    deletion of Your Personal Data, subject to certain exceptions. Once We
    receive and confirm Your request, We will delete (and direct Our Service
    Providers to delete) Your personal information from our records, unless an
    exception applies. We may deny Your deletion request if retaining the
    information is necessary for Us or Our Service Providers to:</li>
                      <ul>
                        <li>Complete the transaction for which We collected the personal
      information, provide a good or service that You requested, take actions
      reasonably anticipated within the context of our ongoing business
      relationship with You, or otherwise perform our contract with You.</li>
                        <li>Detect security incidents, protect against malicious, deceptive,
      fraudulent, or illegal activity, or prosecute those responsible for such
      activities.</li>
                        <li>Debug products to identify and repair errors that impair existing
      intended functionality.</li>
                        <li>Exercise free speech, ensure the right of another consumer to exercise
      their free speech rights, or exercise another right provided for by law.</li>
                        <li>Comply with the California Electronic Communications Privacy Act (Cal.
      Penal Code § 1546 et. seq.).</li>
                        <li>Engage in public or peer-reviewed scientific, historical, or statistical
      research in the public interest that adheres to all other applicable
      ethics and privacy laws, when the information's deletion may likely
      render impossible or seriously impair the research's achievement, if You
      previously provided informed consent.</li>
                        <li>Enable solely internal uses that are reasonably aligned with consumer
      expectations based on Your relationship with Us.</li>
                        <li>Comply with a legal obligation.</li>
                        <li>Make other internal and lawful uses of that information that are
      compatible with the context in which You provided it.</li>
                      </ul>
                    <li>The right not to be discriminated against. You have the right not to be
    discriminated against for exercising any of Your consumer's rights,
    including by:</li>
                  <ul>
                    <li>Denying goods or services to You</li>
                    <li>Charging different prices or rates for goods or services, including the
      use of discounts or other benefits or imposing penalties</li>
                    <li>Providing a different level or quality of goods or services to You</li>
                    <li>Suggesting that You will receive a different price or rate for goods or
      services or a different level or quality of goods or services</li>
                  </ul>
                  </List>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Exercising Your CCPA Data Protection Rights 
                  </Title>
                  <Text variant="small" mb="10px">
                  In order to exercise any of Your rights under the CCPA, and if You are a
California resident, You can contact Us:
                  </Text>
                  <List>
                    <li>By email: hi@samelogic.com</li>
                    <li>By visiting this page on our website: https://samelogic.com/privacy</li>
                  </List>

                  <Text variant="small" mb="10px">
                  Only You, or a person registered with the California Secretary of State that
You authorize to act on Your behalf, may make a verifiable request related to
Your personal information.
                  </Text>
                  <Text variant="small" mb="10px">
                  Your request to Us must:
                  </Text>
                  <List>
                    <li>Provide sufficient information that allows Us to reasonably verify You are
    the person about whom We collected personal information or an authorized
    representative</li>
                    <li>Describe Your request with sufficient detail that allows Us to properly
    understand, evaluate, and respond to it
</li>
                  </List>

                  <Text variant="small" mb="10px">
                  We cannot respond to Your request or provide You with the required information
if We cannot:
                  </Text>
                  <List>
                    <li>Verify Your identity or authority to make the request</li>
                    <li>And confirm that the personal information relates to You</li>
                  </List>

                  <Text variant="small" mb="10px">
                  We will disclose and deliver the required information free of charge within 45
days of receiving Your verifiable request. The time period to provide the
required information may be extended once by an additional 45 days when
reasonable necessary and with prior notice.
                  </Text>
                  <Text variant="small" mb="10px">
                  Any disclosures We provide will only cover the 12-month period preceding the
verifiable request's receipt.
                  </Text>
                  <Text variant="small" mb="10px">
                  For data portability requests, We will select a format to provide Your
personal information that is readily useable and should allow You to transmit
the information from one entity to another entity without hindrance.
                  </Text>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Do Not Sell My Personal Information    
                  </Title>
                  <Text variant="small" mb="10px">
                  You have the right to opt-out of the sale of Your personal information. Once
We receive and confirm a verifiable consumer request from You, we will stop
selling Your personal information. To exercise Your right to opt-out, please
contact Us.
                  </Text>
                  <Text variant="small" mb="10px">
                  The Service Providers we partner with (for example, our analytics or
advertising partners) may use technology on the Service that sells personal
information as defined by the CCPA law. If you wish to opt out of the use of
Your personal information for interest-based advertising purposes and these
potential sales as defined under CCPA law, you may do so by following the
instructions below.
                  </Text>
                  <Text variant="small" mb="10px">
                  Please note that any opt out is specific to the browser You use. You may need
to opt out on every browser that You use.
                  </Text>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Website    
                  </Title>
                  <Text variant="small" mb="10px">
                  You can opt out of receiving ads that are personalized as served by our
Service Providers by following our instructions presented on the Service:
                  </Text>
                  <List>
                    <li>The NAI's opt-out platform: http://www.networkadvertising.org/choices/</li>
                    <li>The EDAA's opt-out platform http://www.youronlinechoices.com/</li>
                    <li>The DAA's opt-out platform:
    [http://optout.aboutads.info/?c=2&lang=EN](http://optout.aboutads.info/?c=2&lang=EN)</li>
                  </List>
                  <Text variant="small" mb="10px">
                  The opt out will place a cookie on Your computer that is unique to the browser
You use to opt out. If you change browsers or delete the cookies saved by your
browser, You will need to opt out again.
                  </Text>

                  <Title variant="card" fontSize="2rem" mb="30px">
                  Mobile Devices     
                  </Title>
                  <Text variant="small" mb="10px">
                  Your mobile device may give You the ability to opt out of the use of
information about the apps You use in order to serve You ads that are targeted
to Your interests:
                  </Text>
                  <List>
                    <li>"Opt out of Interest-Based Ads" or "Opt out of Ads Personalization" on
    Android devices</li>
                    <li>"Limit Ad Tracking" on iOS devices</li>
                  </List>
                  <Text variant="small" mb="10px">
                  You can also stop the collection of location information from Your mobile
device by changing the preferences on Your mobile device.
                  </Text>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                  Links to Other Websites 
                  </Title>
                  <Text variant="small" mb="10px">
                  Our Service may contain links to other websites that are not operated by Us.
If You click on a third party link, You will be directed to that third party's
site. We strongly advise You to review the Privacy Policy of every site You
visit.
                  </Text>
                  <Text variant="small" mb="10px">
                  We have no control over and assume no responsibility for the content, privacy
policies or practices of any third party sites or services.
                  </Text>
                </Box>
                

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                  Changes to this Privacy Policy 
                  </Title>
                  <Text variant="small" mb="10px">
                  We may update Our Privacy Policy from time to time. We will notify You of any
changes by posting the new Privacy Policy on this page.
                  </Text>
                  <Text variant="small" mb="10px">
                  We will let You know via email and/or a prominent notice on Our Service, prior
to the change becoming effective and update the "Last updated" date at the top
of this Privacy Policy.
                  </Text>
                  <Text variant="small" mb="10px">
                  You are advised to review this Privacy Policy periodically for any changes.
Changes to this Privacy Policy are effective when they are posted on this
page.
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
