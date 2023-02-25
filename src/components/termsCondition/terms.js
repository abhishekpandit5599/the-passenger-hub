import React, { useEffect } from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";
import { appConstants } from "../../themes/appConstant";
import { Collapse } from "antd";
import Icon1 from "../../common/icon";
const { Option } = Select;

const TermsConditions = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(1);
  const { Panel } = Collapse;

  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const { drawerState } = authenticationData;

  const handlewClick = () => {
    let action = drawerState ? false : true;
    dispatch(drawerAction(action, "drawerState"));
  };
  useEffect(() => {
    document.title = "The PassengerHub";
    window.scrollTo(0, 0);
  }, []);


  const text1 = (
    <div className="text-model">
      <p className="pre-text">
        Fill out an online form with as much detail as possible, so we can get your query to the right person and give you the best answer. We'll aim to get back to you within one day. </p>

    </div>
  );
  const text2 = (
    <div className="text-model">
      <p className="pre-text">
        If you’re travelling on UK trains, have your question answered by one of our support team using the <a href="">online chat service.</a>  This service is currently available between 08:00 and 22:00 UK time any day of the week.
      </p>

    </div>
  );
  const text3 = (
    <div className="text-model">
      <p className="pre-text">
        <Link> For UK journeys</Link>
      </p>
      <p className="pre-text">
        Call us between 08:00 and 22:00 UK time any day of the week.
      </p>
      <p className="pre-text">
        Call us on 0333 202 2222 to make a booking or to get help with existing bookings, unless you're calling us from outside the UK where you'll need to dial +44 333 202 2222. Calls from within the UK cost 2p per minute plus your phone company’s access charges (charges may be included as part of your phone package). Calls from outside the UK may cost more.
      </p>
      <p className="pre-text">
        Just so you know, we can only discuss booking details with the person who made the booking, for data protection reasons. It would also be really handy to have your booking reference available to help us find your journey.       </p>
      <Link>
        Customers from UK, for Eurostar and European journeys
      </Link>
      <br />
      <p className="pre-text">Call us between 09:00 and 17:00 UK time Monday to Friday.</p>
      <p className="pre-text">Call us on 0333 200 8088 to make a booking or to get help with existing bookings, unless you're calling us from outside the UK where you'll need to dial +44 333 200 8088. Please note you cannot call us to make a booking. Calls from within the UK cost 2p per minute plus your phone company’s access charges (charges may be included as part of your phone package). Calls from outside the UK may cost more.</p> <br />
      <p className="pre-text">Just so you know, we can only discuss booking details with the person who made the booking, for data protection reasons. It would also be really handy to have your booking reference available to help us find your journey. </p><br />
      <p className="pre-text">We also offer support by email. Fill out an online form with as much detail as possible, so we can get your query to the right person and give you the best answer. </p><br />
      <Link>Customers from France</Link><br />
      <p className="pre-text">Call us between 08:00 and 12:00 CET and between 14:00 and 16:00 Monday to Friday. Call us between 08:00 and 12:00 on Saturday. <br /><br />Call us on 01 73 44 07 86 to get help with existing bookings. Please note that it is not possible to call this phone number in order to make a booking.<br /><br />Just so you know, we can only discuss booking details with the person who made the booking, for data protection reasons. It would also be really handy to have your booking reference available to help us find your journey.</p><br />
      <Link>Customers from Italy</Link><br />
      <p className="pre-text">Call us between 08:00 and 12:00 CET Monday to Friday. <br /><br />

        Call us on 002 3055 1995 to get help with existing bookings.  Please note you cannot call us to make a booking. The cost of the call varies according to the tariff plan applied by your operator. <br /><br />

        Just so you know, we can only discuss booking details with the person who made the booking, for data protection reasons. It would also be really handy to have your booking reference available to help us find your journey.</p>

    </div >
  );

  const text31 = (
    <pre className="p-3 pre-text">`Through our website <Link>www.thetrainline.com</Link>  (we will call this, our “website”) and iOS and Android mobile applications (we will call these, our “apps”), you can check timetables and ticket prices for train, coach or bus journey, buy Discount Cards and book tickets directly (we will call this, our “booking service”). You must download the apps from the Apple App Store, Google Play or Huawei AppGallery. <br /> <br />


      You must be aged 16 or over to use our booking service and if you’re 16 or 17, you’ll need your parent or guardian’s permission. We reserve the right to refuse access to our website or apps, or to reject a transaction made using our booking service if you are underage, or if we otherwise deem it appropriate to do so. <br /><br />

      You’ll have to pay for any costs involved with accessing our booking service (for example, internet access fees and mobile data costs). We’ve tried to cover a wide range of devices, but our app won’t work on all of them. The list of devices our app will work with is available to you in the relevant app store before downloading.<br /><br />

      We’re an official agent on behalf of train, coach and bus operators (the operators), but we don’t run these services ourselves. We’re only responsible for our booking service, to the extent laid out in these Terms and Conditions. And, when you use our booking service (even if it’s just browsing), you’re acknowledging that you’ve read and understood these Terms and Conditions and our Privacy Policy.<br /><br />

      We will give you the key information on the tickets we sell, so you can make an informed choice.<br /><br />

      Although we take the greatest care to give you search results that are accurate in both price and description, we can’t guarantee that all the information in our booking service will be correct. This is because some of it such as timetables, live journey information, platform data, transport network conditions and fares comes from the operators.<br /><br />

      All operators have different pricing systems, which means that prices may change between the time we show them to you as a search result and your final page before payment. But, we’ll let you know before you pay if the price has changed.<br /><br />

      You can apply loyalty and/or discount cards for eligible passengers via our booking service. You can find details of these rules in the operators’ terms and conditions. See also information about Railcards`<br /><br />
    </pre>

  )
  const text32 = (<pre className="pre-text">When you book tickets with us, you can either check out as a guest or create a personal account (My Account). We can refuse the creation of your account, or access to our booking service, for any legitimate reason. <br /> <br />

    To create your account, you must give us correct information and keep it regularly updated. Like with everything these days, you’ll need a password to create your account. We know you must have a few but it’s important you keep it safe and confidential, as you’re responsible for anything that happens in your account using this password. Let us know as soon as possible if your password’s lost or stolen. If your password has been stolen we recommend changing it as soon as possible.<br /> <br />

    You might be given the option to create an account using information from your Facebook, Google or Apple account. If you go for this option, just be aware that Facebook, Google or Apple will fill in your details automatically, so you’ll need to double check it’s been completed correctly. Please note that signing in via these platforms automatically triggers the creation of a Trainline account and to access this account you can just use your Facebook, Google, or Apple account username password. That’s one less thing to have to remember! For more information, please see our <Link>Privacy Policy</Link> .<br /> <br />

    Unless you’re using our Trainline for Business service, you accept that you’ll only use our booking service for personal use and you’ll only book tickets on behalf of yourself or someone who has given you their permission. You’re also agreeing that the card you pay with is yours (i.e. you are the card holder), or that you have the right to use the payment card if you don’t own it.<br /> <br />

    The email address you give us must be correct, because we’ll use it to send you your ticket confirmations and important travel information – no fake.email@junk.com false addresses please! Please check that our emails aren’t blocked by your internet service provider or sent to your spam folder. <br /> <br />

    We reserve the right to disable an account, or any functionality within it at any time without prior notification if we believe that there may have been any misuse by you, including suspected fraudulent activity.</pre>)
  const text33 = `You can book tickets for a group of people (passenger/passengers) through our booking service. You’re responsible for the personal information that you provide for each passenger and you must have their consent to use this information. Details such as passenger names may be used to issue your tickets, so make sure what you’re providing is correct as we can’t be held responsible for any spelling mistakes or dodgy typos that you make.`

  const text41 = `We provide booking services for a wide range of train, coach and bus services in the UK, across Europe and beyond.  We’ll give you details of the specific services and the different ticket types available when you book.

  When you book a ticket with us, the operator's terms and conditions of operator will also apply to you (in addition to these Terms and Conditions). Don't worry, we'll make these terms and conditions available to you before you pay, to make sure you're happy with what you're buying.
  
  More general information about ticket types you can purchase is available here:
  
  UK Train Tickets Explained  
  
  Buses and Coaches in the UK
  
  Europe Train Tickets  
  
  Buses and Coaches in Europe`
  const text42 = `We’ll always let you know the options available to you during our booking process and give you any relevant information and instructions. Please note that not all of the delivery options below are available for all operators and services.

  Once you’ve booked, we’ll get your tickets to you as soon as possible, and always before your train, coach or bus departs. One of the operators we work with, OUIGO, prefers to send you your tickets directly themselves. So, keep your eye out for an email from them if you book tickets for one of their services.
  
  Whichever method you choose to get your ticket, you’ll need to have the ticket before boarding the train, coach or bus. For some services, it may be that collection at the station is the only possible option so you will need to leave enough time to collect your ticket before boarding your train. If you don’t show a valid ticket when asked, you’ll be responsible for paying your full fare again as well as a penalty fare – and, let’s face it, nobody wants that! Tickets are non-transferable, unless we or the operators’ terms and conditions state clearly that they are. That means you mustn’t let anyone else use your ticket.`
  const text43 = (
    <pre className="pre-text">
      An eticket is emailed to you as a PDF attachment, meaning you’ll need a mobile device that can open PDFs and has internet access to receive the email. You can use them in one of the following ways: <br /> <br />
      <ol style={{ listStyleType: 'disc' }}>
        <li>Open the PDF attachment and show the ticket on your mobile device.</li>
        <li>Download the eticket on our app.</li>
        <li>Download and show the eticket in your Apple Wallet if you are using an Apple Wallet enabled Apple device – there’ll be a live link in the email we send you.</li>
        <li>Print the eticket</li>
      </ol> <br /><br />
      An eticket can only be used by one customer for one valid journey and it’s a criminal offence to amend and/or reproduce an eticket for fraudulent use. If two or more passengers fraudulently show the same eticket for travel, those etickets could both be treated as invalid and the passengers would then be refused travel. You’re responsible for any fraudulent use of your eticket.
    </pre>
  )
  const text44 = `Mobile Tickets are available on certain routes and you’ll need our app. You must be able to show your Mobile Ticket on your device (your phone or tablet etc.), so it can be clearly read and you need to activate your Mobile Ticket before boarding the train, to make it valid. If Mobile Tickets have been booked for more than one passenger, then all passengers must travel together.`
  const text45 = `You must give yourself enough time to collect your tickets before boarding the train, bus or coach. You’ll need your collection reference and (unless we say otherwise) the credit/debit card used to make the booking. Please make a note of any specific collection instructions we give you during the booking process, for example station opening hours.

  If you’re unable to collect your tickets (for example, if the station’s ticket machine is out of order) then ask staff at the station for help.`
  const text46 = `Whichever postage method you choose, we’ll send your tickets to the delivery address you give us, so make sure it’s correct.

  UK normal post
  UK next day delivery – We use Royal Mail Special Delivery. You’ll need to sign for the tickets upon delivery. Please note that due to Royal Mail restrictions it may take longer to deliver to remote locations. For more information, read our FAQ page – Are there any postcode restrictions for Next Day Delivery?
  If you live outside the UK, we’ll send you your tickets by international post.
  Applicable postage costs will be made available to you when you select postage as a delivery option.`
  const text51 = `In the UK, a Season Ticket is a non-transferable ticket that gives you unlimited travel on train services between specific stations, or within specific zones during the ticket’s validity period.  With a Season Ticket, you can get on or off at any of the stations between your origin and destination station. This is known as breaking your journey.  

Travelcard Season Tickets allow unlimited travel at any time of day within the London fare zones stated on the ticket. This includes National Rail, London Underground, DLR and London Trams. Travelcard Season Tickets are also valid on most London Bus services. For journeys that start or finish outside of the stated London fare zones, you will need to pay the additional cost to cover the part of the journey not covered by the Travelcard Season Ticket.

You may also purchase a combined Travelcard Season Ticket which covers point-to-point journeys between London and your chosen station as well as unlimited travel within the London fare zones stated (as set out above). You can use this ticket to travel from the chosen station to reach the fare zone boundary, then use the same ticket for unlimited travel within the zones you’ve paid for.

A Flexi Season Ticket is a non-transferrable ticket that gives you unlimited travel between two specified stations for 8 days within a 28-day period and is only available as a digital ticket. Each day pass remains valid until 04:29 on the day following activation. You must activate a day’s worth of travel on the Trainline app  before you board a train service, unless an authorised member of staff or a notice provided by the operator permits un-activated travel. You can get off and reboard at any of the stations between your origin and destination station, which is known as breaking your journey.

You can use your Season Ticket in conjunction with another ticket. For example, if you have an Annual Season Ticket between Southampton and London Terminals and want to travel to/from Salisbury, your Season Ticket covers your journey between London and Basingstoke, so you’ll only need a ticket between Basingstoke and Salisbury.  

We offer a number of ways to get your season ticket, including paper options (via post and collection at the station) and digital options (eticket seasons, barcode seasons and flexi seasons). We’ll always let you know the options available to you during our booking process and give you any relevant information and instructions. Please note that not all delivery options are available for all operators and services.`

  const text52 = (
    <pre className="pre-text">
      You’ll need to buy an appropriate additional ticket before you travel, if your Season Ticket: <br /><br />
      <ol style={{ listStyleType: 'disc' }}>
        <li>has expired</li>
        <li>doesn’t cover your journey in full</li>
        <li>has been left behind</li>
        <li>or is for Standard Class travel, and you wish to travel First Class</li>
      </ol>
      <br />
      If you do not have the correct ticket, you may have to pay a penalty fare. See the National Rail Conditions of Travel (we will call these the <Link>“NRCoT”</Link> ) for more information about penalty fares.
    </pre>
  )

  const text53 = `For most season tickets, you’ll need a valid photocard (with details that match your Season Ticket) before you buy a Season Ticket. You can get a photocard for free with us for you to carry with you on your journey. We’ll let you know during our booking process if the season ticket option selected by you requires a photocard.

Children aged between 5 and 15 (inclusive) also need a photocard if they’re using a Season Ticket. You can get these from most train stations.

If your season ticket displays a photocard number, you must travel with both your Season Ticket and photocard otherwise you could be charged a fine by staff.
`

  const text54 = `We’re taking Season Tickets digital. Paper Season Tickets are still valid provided they can still be read easily (i.e. they’re not damaged or faded). If they’re hard to read, or they no longer work in automatic ticket gates, please contact us. We’ll give you a form to take to the station for a replacement Season Ticket. Most stations accept this form, but please check beforehand.  `

  const text55 = (
    <pre className="pre-text">
      We can replace paper or Oyster Season Tickets that are lost or stolen, provided they’re valid for one month or more, subject to a fee. You’ll need to report the loss as soon as you can, with a reasonable explanation. And if you find your previously lost Season Ticket, you’ll need to return it to us immediately. <br /><br />

      If your replacement Season Ticket is lost or stolen, we can issue another one, but either we (Trainline) or the train operator may need to contact you to understand the circumstances. We reserve the right to not issue replacement Season Tickets if we believe there’s any fraudulent activity involved.  </pre>
  )
  const text56 = (
    <pre className="pre-text">
      You can apply for a refund on the remaining portion of your unused Season Ticket if your: <br /><br />
      <ol style={{ listStyleType: 'disc' }}>
        <li>Flexi Season Ticket is still within its 28 day validity period and has unused day passes;</li>
        <li>Your Weekly Season Ticket has three or more days' validity remaining</li>
        <li>Your Monthly or Custom Season Ticket has seven or more days' validity remaining</li>
        <li>Your Annual Season Ticket has two or more months' validity remaining</li>
      </ol>
      Refunds are calculated from three days before the date we receive your returned paper ticket. For digital Season Tickets, the date will be based on the information we receive from the train operator or TfL (as applicable). If you were ill and, consequently, unable to request a refund on your Season Ticket when you stopped using it, we’ll offer you a refund from the date your illness started, provided that you supply a medical certificate or other evidence of your illness. <br /><br />
      Refund amounts are based on the price paid for your Season Ticket, minus your usage (based on an industry calculation). We charge a £10 fee to refund all Season Tickets. <br /><br />
      Remember, when you pay for an Annual Season Ticket, you’re getting 52 weeks of travel for the price of 40. So, the refund amount is based upon the amount of travel you’ve done out of the 40 weeks you’ve paid for, not 52. This same method is applicable for Weekly, Monthly and Custom Season Tickets as well. <br /><br />
      If you need a refund on a duplicate Season Ticket, we may request additional information (e.g. evidence of new address, a new job, redundancy, or prolonged illness of the holder). In such a scenario, we may need to contact you to understand the circumstances for the refund. <br /><br />
      If you need a refund on a Flexi Season Ticket, you must apply before the end of the 28-day validity period. Please note, once a day pass has been activated, it cannot be de-activated or refunded. <br /><br />
      A Flexi Season Ticket refund is calculated as the difference between the price paid for the Flexi Season Ticket and the cost of the equivalent peak time return ticket for each day pass you have used. A refund fee will also apply. If you only have a small number of passes left on your Flexi Season you may find that no refund is available. <br /><br />
      We reserve the right to refuse to issue refunds on duplicate Season Tickets if we believe there’s any fraudulent activity involved. <br /><br />
      <h5 ><strong>How to request a refund for your Season Ticket:</strong></h5>
      <ol style={{ listStyleType: 'number' }}>
        <li>Sign in to your Season Ticket account</li>
        <li>Select your 'Active' Season Ticket and click 'Refund' in the bottom left corner</li>
        <li>Download, print and complete the Season Ticket Refund Application Form and send it along with your physical season ticket to the address below:
          Seasons Department</li>

      </ol>
      PO Box 23971 <br />
      Edinburgh <br />
      EH3 5DA <br />
      Please allow up to 10 working days to get your Season Ticket refund. <br /> <br />

      Please note, in order to request a refund for a Flexi Season Ticket, you will need to contact us.
    </pre>

  )
  const text57 = `  You can’t change Weekly Season Tickets or Flexi Season Tickets. Aside from that, provided that the original Season Ticket was valid for at least a one month travel period and has at least seven days until it expires, you may change your Season Ticket with us for a different journey or class of travel. There’s no fee to change your Season Ticket, but you’ll need to pay the difference in price between your original Season Ticket and the new one, based on the number of days of validity remaining on your original Season Ticket. Changes to barcode season tickets may require a change to an alternative season ticket format, or an alternative process to be followed.

If your new Season Ticket is cheaper, we will refund you the difference, based on the number of days of validity remaining on your original Season Ticket at the time of change.  

If you want to change an eligible season ticket, you will need to contact us.`

  const text61 = (<pre className="pre-text"> We accept payments in any of the following ways: <br />

    <p className="pre-text"><strong>GBP (£)</strong> </p>
    <ol style={{ listStyleType: 'disc' }}>
      <li>Card payments (Visa, Mastercard, American Express, Diners Club, Maestro)</li>
      <li>PayPal</li>
      <li>Apple Pay</li>
      <li>Google Pay</li>
    </ol>
    <p className="pre-text"><strong>Euros (€)</strong> </p>
    <ol style={{ listStyleType: 'disc' }}>
      <li>Card payments (Visa, Mastercard, American Express, Maestro)</li>
      <li>PayPal</li>
      <li>Apple Pay</li>
      <li>Google Pay</li>
      <li>Sofort (in Germany)</li>
      <li>Ideal (in the Netherlands)</li>
    </ol>
    <p className="pre-text"><strong>US Dollar ($) / Australian Dollar (A$) / Canadian Dollar (C$) / Swiss Franc (CHF) / Swedish Krone (SEK) / Danish Krone (DKK) / Norwegian Krone (NOK) / Japanese Yen (JPY)</strong> </p>
    <ol style={{ listStyleType: 'disc' }}>
      <li>Card payments (Visa, Mastercard, Maestro, except for JPY, American Express)</li>
      <li>PayPal (except for NOK, JPY and DKK at this stage)</li>
      <li>Apple Pay</li>
      <li>Google Pay</li>

    </ol>







    We do not accept payment by cash or cheques in any currency. <br />

    Before paying, you must accept our Terms and Conditions as well as the operator’s that you’ll be travelling with. <br />

    Your order will only be complete when we’ve sent you a confirmation by email and after the full price has been paid. We have the right to cancel or refuse your current order if you’ve not paid for a previous booking in full. <br /><br />

    Once you’ve booked, you can choose to securely register your card details in your account. It’ll make your future bookings speedier. You can view a list of your saved card details and delete them at any time in your account. <br /><br />

    Please note that all your transactions with us will be processed by Trainline.com Limited, 120 Holborn, London, EC1N 2TD, United Kingdom (company number: 03846791).`<br /> <br />
  </pre>)
  const text62 = `We show you prices in the currency that we think is the most relevant for you. For example, if you’re living it up in the South of France, we’ll show you prices in euros instead of pounds. Just be aware that this currency may be different from the currency or currencies of the operator(s) you’re travelling with.

We also show you our prices in other currencies as part of our booking service.

Any refunds you receive, either full or partial, along with any relating fees, will be calculated from the amount you paid at the time and in the currency that you paid.

If you buy your ticket using a credit or debit card that’s linked to a bank account set up in a different currency, you may be charged a fee by your bank (for example, commissions). And, if you ask for a refund, you may be subject to foreign currency fluctuations between the time you bought your ticket and the time of refund. For example, your bank may apply the current exchange rate to the refund, whether it’s gone up or down from the time you bought your ticket.

Please have a look at our FAQ page for more information`

  const text63 = `We may charge you fees on top of your ticket price, but we’ll highlight these to you during the booking process. Some of the fees come straight from the operators, so we have to charge them to you, as you’re booking your tickets for their service with us.

Please have a look at our FAQ page for more information.`

  const text71 = (<pre className="pre-text"><h6><strong> To encourage customers to book with confidence, the rail industry has introduced Advance ticket easements for the UK. Please see our dedicated page for more information.</strong></h6>

    Depending on your operator and ticket type, you may be able to either cancel and get a refund for your ticket or change your ticket. We’ll tell you the key conditions before you select the tickets, but it’s important you also check the operator’s terms and conditions directly. <br /><br />

    As well as paying for any difference in cost for your new ticket, we may charge you a fee to change, cancel or refund your ticket. These fees are sometimes determined by the operators and will be detailed in our booking service as well as their terms and conditions. <br /><br />

    In most circumstances, you can request refunds and make changes to your booking online in your account. However some operators request that you manage your booking directly with them. Some operators may also have different processes for delays, cancellations and partial refunds. Naturally, we won’t change, cancel, replace or refund if there is or if we reasonably suspect that there may have been fraudulent activity involved. <br /><br />

    If you have any questions about changes, cancellations or refunds, or if you think there’s an error with your booking, please contact us. If we agree that the error in your booking was made by us, we’ll give you a replacement ticket, or sort things out as appropriate. <br /><br />

    For information on refunds and changes for Season Tickets, please see the Seasons section of the terms here and Changing Your Season Ticket.
  </pre>
  )
  const text72 = (<pre className="pre-text"><h6><strong>  To encourage customers to book with confidence, the rail industry has introduced Advance ticket easements for the UK. Please see our dedicated page for more information.</strong></h6>

    Automatic refunds for UK rail products <br /><br />

    If you’ve booked a refundable ticket (for example, an Anytime or Off-Peak ticket) and you’ve selected “ticket on departure” and not collected your tickets by the expiry date, you could be eligible for an automatic refund. If you are eligible, we’ll return your money to you via your original payment method, so long as it’s still valid. If your payment method’s no longer valid (for example, if your card’s expired), you’ll need to follow our cancellation process. <br /><br />

    Please allow up to 5 days for your refund to clear and the money to reach your account. <br /><br />

    Cancelling/refunding your ticket for UK rail products <br /><br />

    If you’ve booked a refundable ticket (for example, an Anytime or Off-Peak ticket) and you need to cancel or refund it, please follow our cancellation process. You can refund unused Anytime and Off-Peak tickets up to 28 days after the expiry of the ticket. If you already have your original tickets, you’ll need to return them to us, unused, before we can refund you and you’ll need to cover any costs to return your tickets to us. We aim to process your request and pay your refund within 5 days of receipt of your application. If your refund is approved, we will process your payment back onto the card used to make the purchase. <br /><br />

    Changing your ticket for UK rail products <br /><br />

    If your ticket is changeable but not refundable (for example, Advance tickets), you can change the travel date and time but not the stations you’ve chosen to travel between. Changes must be made before your original journey departs.`
  </pre>)
  const text73 = (
    <pre className="pre-text">
      Our customers travelling outside of the UK may be charged a processing fee directly by the operator. <br /><br />

      <h6><strong>Full cancellation for journeys outside of the UK</strong></h6>

      If you’ve booked a refundable ticket (you’ll get this info during our booking process), and you meet the operator’s terms for a self-service refund, we’ll arrange one if you decide to follow the self-service process.

      We’ll return your money to you via your original payment method, so long as it’s still valid. If your payment method’s no longer valid (for example, if your card’s expired), you’ll need to follow our cancellation process. <br />

      Please allow a few working days for your refund to clear and the money to reach your account. <br /><br />
      <h6><strong>Partial cancellation and changing your ticket for journeys outside of the UK
      </strong></h6>

      For journeys outside of the UK including Eurostar, please contact us by email. <br /><br />

      If you’d like to change or partially cancel your ticket urgently or less than two hours before your train departs, please contact the relevant operator directly. <br /><br />

      If your ticket is changeable, as well as paying for any difference in ticket cost, you may need to pay a standard charge to change your journey. <br /><br />

      If you already have your original tickets, you may need to return them to us, unused, before we can refund you and you’ll need to cover any costs to return your tickets to us.` <br /><br />

    </pre>
  )
  const text74 = `You can manage your UK coach booking with National Express through us. Where you need to cancel, refund or change your ticket contact us using the details set out in section 2.

Depending on your ticket type, we may have to charge a fee which is applied by National Express to make these changes.`
  const text75 = (<pre className="pre-text"> If you’re a customer travelling outside of the UK by bus or coach, you can normally cancel or refund your ticket by contacting us using the details set out in section 2. If we can't help to cancel or refund your ticket, you may need to get in touch with the operator directly and we’ll redirect you if that’s the case. For changes, you’ll need to contact the relevant operator directly.

    Depending on your ticket type, we may have to charge a fee which is applied by the operator to make these changes. <br /><br />
    <h6><strong>Cancelling/refunding your ticket for European coach journeys</strong></h6>


    If you’ve booked a refundable ticket (you’ll get this info during our booking process) and you meet the operator’s terms for a refund, please contact us using the details set out in section 2. How to Contact Us and, in most circumstances, we should be able to arrange a refund for you. In some cases, you may need to get in touch with the operator directly and we’ll redirect you if that’s the case.   <br /><br />
    <h6><strong>Changing your ticket for European coach journeys</strong></h6>


    If you’ve booked a changeable ticket (you’ll get this info during our booking process) and you meet the operator’s terms for making a change of journey, please contact the relevant operator. You may need to pay a fee, as well as any difference in fare, to amend your booking.`
  </pre>)
  const text76 = `If the service you’ve booked a ticket for is cancelled or delayed, you may be able to get a refund or compensation, depending on your operator.  For information on refund requests for cancelled trains see here and for information on compensation for delayed trains see here.

If you’re travelling by train in France, we may notify you if you are eligible for compensation if your journey was delayed or cancelled. Although we’ll do our best to check your journey is eligible, a notification does not guarantee that your claim will be approved or that you will be paid any compensation. Your journey may not meet the operator’s criteria for compensation.  

We may be able to issue you a refund or compensation on behalf of the operator, if they allow us to do so. If not, you can use their contact details to claim directly with them.`

  const text77 = ` Please note that where you buy multiple tickets in one transaction (we call this a “combined booking”), these tickets represent separate contracts with each of the carriers that you are booked to travel with.

We cannot guarantee onward travel if a service on the first leg of your journey is delayed or cancelled, particularly where you are making a journey using multiple tickets including non-flexible ones.

Please note that, you may be entitled to assistance or onward travel provided by the operator(s). Please use their contact details to obtain more information from them.

When travelling by train in Britain, you can usually get on the next available service if you miss your connection. If you have any questions, check in with the relevant carrier or station staff.`

  const text81 = `Discount Cards are digital or physical discount cards which allow you to purchase discounted tickets for eligible train services. Discount Cards can be used to save money on tickets. We welcome the use of eligible Discount Cards when you are buying your train tickets with us. These can be applied to your purchase within our booking service.

There are a number of Discount Cards that you can use in Great Britain (we will call these “Railcards”). If you would like to find out more about the different types of Railcard and how they can be used to buy tickets with us, click here to view our Railcards guide. Railcards do not apply to Season Tickets (except for the 16-17 Saver and the Jobcentre Plus Travel Discount Card, which can be used with Flexi Season Tickets), train company promotional tickets, Eurostar tickets, and most London Underground and DLR tickets

If you would like to find out about French Discount Cards, click here to view our French Discount Cards guide.`

  const text82 = `You may purchase the Discount Cards listed below on the Trainline booking service to be stored on your electronic device (we will call these “Digital Discount Cards”).

Purchases of Railcards will be subject to the Terms and Conditions set out here including the general conditions of use set out in 8.3 and the specific terms that apply to each Railcard, as set out below in 8.4-8.10. Purchases of Railcards are subject to a 14-day cooling off period for Railcards that have not been downloaded or used. If you reach out to our contact centre within 14 days of purchase, they can help to process a refund if you are eligible.

Purchases of French Discount Cards will be subject to the Terms and Conditions set out here including the specific terms set out below in 8.11.`

  const text83 = `The Railcard does not become your property. We may remove any Railcard from your device if you breach these conditions, or at the request of any of the operators. The Railcard and tickets bought with it are not transferable to anyone else and you must not give, lend, or resell them. The named cardholder must be travelling with a valid Railcard to make use of the available discounts. Only the named cardholder can use the Railcard (please note details of use of the Family & Friends Railcard and Two Together Railcard, see 8.4 and 8.6 below). Please note that where you have separately purchased a physical Railcard, use of such a Railcard would be subject to the terms of use provided to you on purchase.

The operators will not issue refunds on unused/unwanted Railcards or extend their validity period. Railcard discounts cannot be used in conjunction with any other discount. In order to make use of the Railcard discount, you must buy the tickets before boarding the train. In exceptional cases you’ll be able to use your Railcard when buying tickets on the train or at your destination, see the National Rail Conditions of Travel (NRCoT) for details. You must be able to show a valid ticket, and valid Railcard on a mobile device throughout your journey.

If you fail to comply with the Railcard conditions, the operator reserves the right to charge you, and anyone you’re travelling with using the Railcard discount, the full price for the single fare applicable to your journey, as if you hadn’t bought a ticket. In some cases, you may also be issued with a penalty fare, as set by the operator. See the National Rail Conditions of Travel (NRCoT) for more information about penalty fares.

If you were charged a penalty fare because you were unable to present your Railcard, say if you’d forgotten or lost it, please contact the relevant operator for a refund. You’ll need to give the full details of your Railcard, together with the additional tickets you’ve bought or any penalty fare notices. You can only claim once during any 12-month period. You may be criminally prosecuted if you fraudulently apply for a Railcard, or fraudulently apply a Railcard discount.

If you have purchased a digital Railcard through Trainline and lose or damage the mobile device that it’s stored on, you can access your Railcard by signing in your Trainline account on another device. There is no fee associated with this.

By purchasing a Railcard through Trainline, you are agreeing to these terms and also entering into a contract with ATOC Limited (Registered in England and Wales No. 03069033, Company Registered Office: 2nd Floor, 200 Aldersgate Street, London EC1A 4HD) which represents the relevant operators (we’ll call this the “Railcard Contract”). ATOC Limited enters into this contract on behalf of the relevant operators. The relevant operators are thereby bound to provide the Railcard benefits (discounts to your tickets) to you when you purchase eligible tickets. The relevant operators shall have rights under the Contracts (Rights of Third Parties) Act 1999 to enforce any of the Railcard conditions set out in section 8. Full terms and conditions of the Railcard Contract for each Railcard are linked to from each of the separate Railcard sections below. `

  const text84 = `A Family & Friends Railcard gives you 1/3 off rail fares across Britain. One Railcard will be issued for up to two people aged 16 years or over. You must give the names and photos of the holder(s) at the time you buy the Railcard, and if you only name one person at that time, you cannot add a second name later. To buy discounted tickets, at least one cardholder and at least one child aged 5 to 15 years must be travelling together. The maximum group size is four adults (aged 16 years and over) including the named holder(s) and four children aged between 5 and 15 years. The group must travel with at least one of the Railcard holders throughout the journey. If the named Railcard holders travel separately, only one cardholder may use the Railcard for discounted tickets as the Railcard must be produced for inspection together with the discounted tickets.

You can travel anytime on weekends and public holidays. On weekdays, the discount is valid after morning peak times. Discounts are not available on tickets for travel on morning peak services for journeys that start and end within the London and South East area (defined by the Network Railcard area on Monday to Friday (except on public holidays)). The time when off-peak services start can vary by station. Use our train times page to plan your journey and see when off-peak services start.

All child fares are subject to a £1 minimum fare at all times. If your child was under 16 when you bought the Railcard, they can still travel at the discounted child fare throughout the validity period of the one-year Railcard, even if they turn 16 during that time. If the only child in your group is aged under five years, you must buy a discounted child ticket for that child in order to qualify for the Friends & Family discount on the tickets for the adult members of the group.

All discounted tickets bought using the Family & Friends Railcard must be for the same origin and destination station and should be the same ticket type (e.g. all Off-Peak Returns).

Click here to view the list of eligible ticket types.

Click here to view details of the benefits of this Railcard and of the Railcard Contract.`

  const text85 = ` A Network Railcard gives you 1/3 off rail fares across the Network Railcard area. You must be aged 16 years old or over to buy a Network Railcard. Network Railcard discounts apply for travel at or after 10.00 Monday to Friday (excluding public holidays) and any time on weekends. Discounts apply to services in the Network Railcard area only. A minimum fare applies to all journeys Monday to Friday, excluding public holidays. Click here to view the minimum fare. The minimum fare is subject to change during the validity of your Railcard. All child fares are subject to a £1 minimum fare at all times.

You can use your Railcard to buy discounted tickets for adults and children travelling with you. The maximum group size is four adults (aged 16 years and over) including you, and four children aged between 5 and 15 years. The group must travel with you throughout the journey. The Network Railcard discount applies to Standard class only.

Click here to view the list of eligible ticket types.

Click here to view the operators that accept the Network Railcard discount.

Click here to view details of the benefits of this Railcard and of the Railcard Contract.`

  const text86 = ` One Railcard will be issued and may only be used by the same two people travelling together. You must provide your names and photos at the time of purchase. Both of you must be aged 16 or over. A Two Together Railcard gives you 1/3 off rail fares across Britain for you and one other adult (16 or over). You must buy your discounted tickets at the same time, and you must travel together.

Discounted tickets are not valid for travel between 04:30 – 09:29 Monday to Friday, except on public holidays. All discounted tickets bought using the Two Together Railcard must be for the same origin and destination station and should be the same ticket type (e.g. all Off-Peak Returns).

Click here to view the list of eligible ticket types. 

Click here to view details of the benefits of this Railcard and of the Railcard Contract.`

  const text87 = (<pre className="pre-text"> You must be aged between 16 and 25 years old to buy this Railcard. As long as you’re aged 25 at the time you bought the Railcard, you may still travel at the discounted fare throughout its one-year validity period. A 16-25 Railcard gives you 1/3 off rail fares across Britain. <br /><br />

    The 16-25 Railcard has a minimum fare that applies between 04.30 and 10.00 Monday to Friday. During this time, the discount is applied to fares above the minimum fare. This minimum fare does not apply to: <br /> <br />
    <ol style={{ listStyleType: 'disc' }}>
      <li>Advance tickets; or</li>
      <li>journeys on public holidays; or</li>
      <li>journeys during July and August.</li>

    </ol>


    <Link>Click here to view the minimum fare.</Link>
    The minimum fare is subject to change during the validity of your Railcard. <br /> <br />

    Click here to view the list of eligible ticket types. <br /><br />

    Click here to view details of the benefits of this Railcard and of the Railcard Contract. <br /><br />
  </pre>)

  const text88 = ` You must be aged between 26 and 30 years old to buy this Railcard. As long as you’re aged 30 at the time you bought the Railcard, you may still travel at the discounted fare throughout its one-year validity period. A 26-30 Railcard gives you 1/3 off rail fares across Britain.

The 26-30 Railcard has a minimum fare that applies between 04.30 and 10.00 Monday to Friday. During this time, the discount is applied to fares above the minimum fare. This minimum fare does not apply to: 

1. Advance tickets; or 
2. journeys on public holidays.
Click here to view the minimum fare. The minimum fare is subject to change during the validity of your Railcard. 

Click here to view the list of eligible ticket types. 

Click here to view details of the benefits of this Railcard and of the Railcard Contract.`

  const text89 = ` A Senior Railcard gives you 1/3 off rail fares across Britain. You must be aged 60 years or over to buy a Senior Railcard. You can travel anytime on weekends and public holidays. On weekdays, the discount is valid after morning peak times. Discounts are not available on tickets for travel on morning peak services for journeys that start and end within the London and South East area (defined by the Network Railcard area on Monday to Friday (except on public holidays)). The time when off-peak services start can vary by station.

Click here to view the list of eligible ticket types. 

Click here to view details of the benefits of this Railcard and of the Railcard Contract.`

  const text810 = `You must be aged 16 or 17 years old to buy the 16-17 Saver. Note that the 16-17 Saver will expire on your 18th birthday. A 16-17 Saver gives you 50% off rail fares across Britain. You can travel anytime on weekdays, weekends and public holidays. Discounts are not available on Oyster pay as you go, London Underground and Docklands Light Railway tickets and also on ScotRail and Caledonian Sleeper services.

Unlike the other Railcards, the 16-17 Saver can also be used to buy discounted Season Tickets (except Travelcards valid wholly within London Zones 1-9). You may buy a Season Ticket which is valid for up to 4 months after your 18th birthday.

Click here to view the list of eligible ticket types.

Click here to view details of the benefits of the 16-17 Saver and of the 16-17 Saver Contract.`

  const text811 = (<pre className="pre-text">Your SNCF Discount Card is personalised and not transferable and when you are travelling with a Discount Card an identity document may be required at the station or on the train. Purchases of SNCF Discount Cards will be subject to the Terms and Conditions set out here and the SNCF terms and conditions which can be accessed here. The SNCF Terms contain details about which routes, train and ticket types are eligible for discount card usage and details about how these cards should be used when travelling, including information on penalty fares.

    The right of withdrawal is applicable from 11/10/2022 for Carte Avantage, Carte Liberté and Forfait subscriptions under certain conditions. Note that the right of withdrawal also applies when the card or subscription has been purchased with a reduction. <br /> <br />

    <h6><strong>Legal deadline for the right of withdrawal:</strong></h6>For any subscription to the carte Liberté, the carte Avantage or the Forfait subscription, the customer has a withdrawal period of fourteen (14) calendar days from the date of purchase. <br /><br />

    <h6><strong>How to do so?</strong></h6> Carte Avantage, Liberté and Forfait purchased remotely (Internet, telephone or post) or at a station at a Self-Service Terminal are eligible for the right of withdrawal. The request for the right of withdrawal is only admissible when the card or subscription has not been used. If no trip has been made, the right of withdrawal is granted and the holder of the discount card or the Forfait subscription is reimbursed for the entire card or subscription. Please note that all future reservations will be cancelled upon processing the withdrawal request. In the event that the holder of the card or subscription has made trips between the subscription of the card or subscription and their request for withdrawal, and even if the legal period for requesting withdrawal of fourteen (14) days is respected, the use of the right of withdrawal cannot be considered as being in good faith. Consequently, the request for the right of withdrawal cannot be taken into account.

    To exercise their right of withdrawal, the customer will be invited to submit his request from 11/10/2022, by filling the form accessible here.

    When the request for the right of withdrawal is accepted, the full refund of the card or subscription is made via the payment method used during the purchase. <br /><br />
    <h6><strong>Special case of cartes Avantage, Liberté and Forfait subscriptions purchased before 11/10/22</strong></h6>


    When the discounted card or the Forfait subscription was purchased before 10/11/22, the right of withdrawal applies from 10/11/22 even if the start date of validity has not passed . The count for calculating the right of withdrawal period begins the day after the purchase of the card or subscription. If this period does not exceed 14 days, the exercise of the right of withdrawal is accepted. The discount card or subscription can then be refunded.

    Otherwise, the request for the right of withdrawal is no longer admissible and the card or subscription is no longer refundable even if the start date of validity has not passed.`
  </pre>)
  const text91 = `We offer a Refer-a-Friend scheme, which is managed by our partner, Mention Me. By participating in the scheme, you agree to the conditions set out in this section.

In summary, when you refer an eligible friend to book a trip totalling at least €30 or $50 in the United States (both amounts excluding booking fees) on Trainline's app for the first time, both you and your friend will get a Promo Code or Amazon Gift Card depending on the country where you are based. Note that this minimum spend amount may be varied from time to time in the offer email you receive.  

In order to qualify for the scheme, each friend you refer (as a Referrer) must be a new Trainline customer, be over the age of 18 and live in Italy, Spain, Germany or the United States. Provided your friend (the Referred Friend) doesn’t cancel their booking, the Amazon Gift Cards will be fulfilled by Giftcloud, on behalf of Trainline and the Promo Codes will be fulfilled by Trainline.

Please see the full terms and conditions for the Refer-a-Friend scheme. The Amazon Gift Card is subject to Amazon’s terms and conditions. The Promo Code is subject to Trainline’s terms and conditions (9.5). Trainline reserves the right to refuse the issue of any reward to any Referred Friend or Referrer at any time and to vary any and all elements of this scheme at any time without notice.`

  const text92 = ` Trainline.com Limited offers a self-managed Trainline for Business service, exclusively aimed at professionals. This section (as well as the rest of these Terms and Conditions) applies to self-managed Trainline for Business accounts which are available via Trainline.com. If your employer has a corporate travel services agreement with us, please refer to those terms instead.

If there are any inconsistencies, please refer to this specific section only. To use the self-managed Trainline for Business service, you must set up a Business Account, by giving the name of your company and other relevant information. You can then invite your colleagues to use the service. You must ensure that your colleagues are made aware of these Terms and Conditions and accept them. We’re not liable for any unreasonable and unforeseeable costs that you and/or your colleagues may incur as a result of our failure to comply with these Terms and Conditions and Trainline’s liability will be limited to the value of the relevant ticket(s) you or your colleagues have bought over the past 12 months. We will in no circumstances pay or be responsible for any indirect loss. Either party may terminate the service at any time. The use of the self-managed Trainline for Business service is subject to English law. Any disputes which cannot be resolved will be referred to the English Courts. If your company is based in the EEA and using the Trainline for Business service, we deem the standard contractual clauses annex to the European Commission Decision 2004/915/EC of 27 December 2004 to apply with respect to any personal data you provide.`

  const text93 = `You can buy third-party products and services (both rail and non-rail related), via our booking service and sometimes we’ll link directly to the websites or apps of third-party providers. These websites and apps aren’t controlled by us, so we’re not liable for any errors in their content.

Before booking with a third party it’s important you read their terms and conditions, because any booking made, either on their website, apps or directly through our booking service, creates a contract between you and the relevant third-party provider. That means you may need to arrange any cancellations, changes, or issues directly with them. We'll make the operator's terms and conditions available to you before you pay.`

  const text94 = (<pre className="pre-text"> <h6><strong> UK Insurance</strong></h6>

    For policies purchased before 23 November 2020, Trainline.com Limited was an appointed representative of Fogg Travel Insurance Services Limited, which is regulated and authorised by the Financial Conduct Authority with registration number 307304. For policies purchased from 23 November 2020 Trainline.com Limited is an appointed representative of Insurance Administration Services Limited, which is regulated and authorised by the Financial Conduct Authority with firm reference number 307309. <br /><br />

    For policies purchased before 30 November 2020, the insurance was underwritten by ETI International Travel Protection, the UK branch of Europäische Reiseversicherung AG (ERV), registered at Companies House FC 25660, BR 007939. ERV is regulated and authorised by the Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin – www.bafin.de) and the Prudential Regulation Authority and subject to limited regulation by the Financial Conduct Authority and Prudential Regulation Authority with registration number 220041.  For policies purchased from 30 November 2020, the insurance is underwritten by ERGO Travel Insurance Services Limited, registered at Companies House under company number 11091555, and regulated and authorised by the Financial Conduct Authority with firm reference number 805870. The insurance is provided by Great Lakes Insurance SE, a German insurance company with headquarters at Königinstrasse 107, 80802 Munich, Germany and acting through its UK Branch with Financial Conduct Authority Firm Reference Number 769884. <br /><br />

    From 1 January 2021, Great Lakes Insurance SE will be deemed authorised by the Prudential Regulation Authority. Subject to regulation by the Financial Conduct Authority and limited regulation by the Prudential Regulation Authority. Details of the Temporary Permissions Regime, which allows EEA-based firms to operate in the UK for a limited period while seeking full authorisation, are available on the Financial Conduct Authority’s website.`
  </pre>)
  const text95 = `From time to time, Trainline may offer you a discount code (we’ll call each of these a “Promo Code”). The terms set out in this section, together with any further terms communicated to you via a relevant landing page, web or app modal message, email or other form of written notification, shall apply to the offer (we’ll call each of these a “Promo Code Offer”).

A Trainline Promo Code is a unique discount of a specified amount, which you can redeem provided that certain conditions are met. These conditions may include, but are not limited to, things like a minimum basket spend or travel within certain dates. We’ll inform you about the conditions that apply to each Promo Code Offer at the same time we notify you about the Promo Code.

The following conditions and restrictions will apply to every Promo Code Offer:

1. You must have, or register to create, a Trainline account.

2. Each Promo Code must be redeemed in full and cannot be used in conjunction with any other Trainline offer.

3. Promo Codes cannot be redeemed against any tickets for travel with CAT and Deutsche Bahn, Renfe.
4. Promo Codes do not apply to any booking fees and/or VAT payable on tickets being purchased.
If you make an eligible purchase on our service using a Promo Code and subsequently obtain a refund:

a. you will lose your Promo Code,

b. you will only be refunded the amount paid for the purchase (the Promo Code value will not be refunded).

5. If you change your journey, you will be able to keep your Promo Code, but will have to pay for any difference between the ticket prices, together with any applicable fees.
We reserve the right to refuse the issue of any Promo Code or Promo Code Offer at any time and to vary any and all elements of each offer at any time without notice.`

  const text96 = `SplitSave saves you money by “splitting” your journey into multiple tickets. Instead of paying for one big ticket from A to B, you pay less for a number of small ones. Same train, same route - just more tickets. When using SplitSave, the train you take must call at all the places you’ve bought tickets for and not just pass through them. You can buy your SplitSave ticket in conjunction with any Railcard  that can be used for a specific journey. SplitSave tickets work with group save too.

More info in the FAQs.`

  const text97 = `Please note that where you buy Prix Futés tickets, you are buying multiple tickets in one transaction, these tickets represent separate contracts with each of the carriers that you are booked to travel with. You can buy your Prix Futés ticket in conjunction with any Discount Card that can be used for a specific journey.

More info in the FAQs.`

  const text100 = `
By using our booking service or making a booking with us, you’re agreeing that

you’ve received these Terms and Conditions in a way that you can understand clearly
you accept the most recent version fully
you’re committed to paying for the tickets you book
We like to stay relevant, so these Terms and Conditions may change sometime in the future. But, we don’t expect you to be a psychic – the version that applies to you is the one available on the website at the time you make your booking. If you don’t agree with and accept the most recent Terms and Conditions, you’ll have to stop using our booking service, website and apps.

By accepting these Terms and Conditions, you’re agreeing that there’s no partnership, employment or agency relationship between us. Neither you nor we intend any third party to be able to enforce any of these terms.`

  const text110 = `We act as an official agent on behalf of the operators. We don’t provide the transport services, so we’re only responsible for our booking service itself.

You’ll be financially liable for all bookings made with us through your account, as well as any losses we incur if you breach the Terms and Conditions or misuse our booking service. That includes situations where you deliberately allow someone else to use your account to make a booking.

We are not responsible for any loss or damage that is not foreseeable. Loss or damage is foreseeable if either it is obvious that it will happen or if, at the time the contract was made, both we and you knew it might happen. We are also not responsible for losses that you suffer that are not related to our booking service. Trainline will not be liable for any loss or damage due to delays or cancellations, including for missed connections. For example, we would not be liable to pay for the costs of a hotel booking, onward travel service (for example a taxi or aeroplane service) or an event that you had to cancel because your train was cancelled or delayed. Nothing in these Terms and Conditions shall limit or exclude our liability for death or personal injury caused by negligence, or that of our employees, agents or sub-contractors (as applicable); or fraud or fraudulent misrepresentation by us or our employees.`

  const text121 = `Under consumer legislation, rail, bus and coach tickets aren’t subject to the right of withdrawal. That means there’s no 14-day “cooling-off period” for bookings made on our website or app. Please see 8.2 and 8.11 for specific Railcard conditions.`

  const text122 = `By making a booking via our booking service, you’re telling us that you’re not currently subject to any economic, financial, territorial or sectoral sanctions, trade embargoes or individual asset freezes.

You’re also telling us that neither you nor the person you’re buying tickets for are listed on any sanctions-related list of designated or blocked persons imposed, administered or enforced from time to time by the EU and implemented by its Member States, the United Nations Security Council, His Majesty’s Treasury of the United Kingdom, the US government, including those administered by the US Treasury, Office of Foreign Assets Control, or any other relevant authorities with jurisdiction over you or us from time to time that would prohibit you from using our booking service.

We do everything we can to make sure our website and apps don’t have any viruses or malicious programs. But it’s important that you’re protected against all computer viruses and software that could affect your device after using our website or apps or a third-party website or apps, just in case anything is missed. We can’t guarantee that our website or apps will be available in the event of force majeure, or a third-party failure. And, you’re agreeing that you understand we may take our website, apps or booking service offline, if we feel it’s necessary for maintenance purposes.

Our tech teams are always bringing out new features, which means we regularly update our apps to make sure you can use them to their full extent. We recommend that you download and install all published updates.

You’re not allowed to do any of the below activity:

1. Use any device, software, automated agents, scripts or routine to hack, or attempt to hack, into or interfere with our booking service or the security of our websites or apps, or to create multiple accounts, or to strip, scrape, or mine data from our booking service;
2. Change, destroy or upload content (except when we ask you to do so e.g. photos when purchasing Railcards) on our booking service, and that goes for attempts to change, destroy or upload something (except when we ask you to) too;
3. Use, or attempt to use, any engine, software, tool, agent or other device or mechanism (except the search mechanisms we provide, other third-party commercially available web browsers or software to assist with accessibility) to navigate or search our booking service;
4. Use our booking service to collect or store personal data about other users without their consent;
5. Change, copy, disassemble, reverse compile or reverse engineer any part of our booking service, or access our booking service to build a similar or competitive site or service; or
6.Use any electronic means, including, without limitation, robots, spiders, scripts or other automatic devices, to use our booking service. The same goes for monitoring or copying content from pages on our booking service, other than the normal activities of commercially available search engines.`

  const text123 = `We don’t sell, organise, or arrange any packages, so the Package Travel and Linked Travel Arrangements Regulations 2018 do not apply to our booking service, and we will not be responsible for the proper performance of those additional travel services. In case of problems please contact the relevant third party provider.

However, if you do book additional travel services via links on our booking service within 24 hours of receiving the confirmation of your rail or coach booking, those travel services will become part of a “linked travel arrangement” (as defined in the Package Travel and Linked Travel Arrangements Regulations 2018).

Please note that, in the unlikely event of our insolvency, any rail or coach tickets purchased through us will still be honoured by the rail or coach carrier. Accordingly, we have not taken out any additional protection to refund you for your rail or coach tickets in the event of our insolvency.

`

  const text124 = `Access to our website and apps doesn’t give you any intellectual property rights relating to them, other than a right to use them in line with these Terms and Conditions. You can’t under any circumstance copy, represent, change, transmit, or publish any part of our website or app (regardless of your device) without clear written permission from us, or the companies in our group, first. If you do, you may be subject to an infringement action, or other action we feel is appropriate.`

  const text125 = `Any data in our systems can be used as proof for things like bookings, requests and anything else that relates to your use of our website or apps. This data can be used in legal proceedings, in the same way as any written document.

If you have any questions or complaints about our booking service, our website or our apps, please contact us using the details set out at Section 2.

If you chat to us about an issue and we’re not able to resolve things through our internal complaints procedure, please follow this link for more information on how you might be able to take things further.`

  const text126 = `With the exception of sections 13, 14 and 15 below, the relevant laws of the United Kingdom will apply to these Terms and Conditions and the relevant courts of the United Kingdom will have exclusive jurisdiction in relation to these Terms and Conditions.`

  const text131 = `In place of Section 3.2 "Creating an account or checking out as a guest", the following applies:

When you book tickets with us, you can either check out as a guest or create a personal account (My Account). We can refuse the creation of your account, or access to our booking service, for any legitimate reason.

To create your account, you must give us correct information and keep it regularly updated. Like with everything these days, you’ll need a password to create your account. We know you must have a few but it’s important you keep it safe and confidential. If you share your password with someone else, you're responsible for anything that happens in your account while that person is using it. Let us know as soon as possible if your password’s lost or stolen. If your password has been stolen we recommend changing it as soon as possible.

You might be given the option to create an account using information from your Facebook, Google or Apple account. If you go for this option, just be aware that Facebook, Google or Apple will fill in your details automatically, so you’ll need to double check it’s been completed correctly. Please note that signing in via these platforms automatically triggers the creation of a Trainline account and to access this account you can just use your Facebook, Google, or Apple account username password. That’s one less thing to have to remember! For more information, please see our Privacy Policy.

Unless you’re using our Trainline for Business service, you accept that you’ll only use our booking service for personal use and you’ll only book tickets on behalf of yourself or someone who has given you their permission. You’re also agreeing that the card you pay with is yours (i.e. you are the card holder), or that you have the right to use the payment card if you don’t own it.

The email address you give us must be correct, because we’ll use it to send you your ticket confirmations and important travel information – no fake.email@junk.com false addresses please! Please check that our emails aren’t blocked by your internet service provider or sent to your spam folder.

We reserve the right to disable an account, or any functionality within it at any time without prior notification if there has been or if we reasonably suspect there is any misuse by you, including fraudulent activity.

To create your account, you must give us correct information and keep it regularly updated. Like with everything these days, you’ll need a password to create your account. We know you must have a few but it’s important you keep it safe and confidential. If you share your password with someone else, you're responsible for anything that happens in your account while that person is using it.`

  const text132 = `Your order will only be complete after the full price has been paid.`

  const text133 = `The Refer-a-Friend Scheme detailed in section 9.1 is not available in France.`
  const text134 = `The following provision contained in Section 9.5. "Promo Codes" is not applicable to French consumers: "We reserve the right to refuse the issue of any Promo Code or Promo Code Offer at any time and to vary any and all elements of each offer at any time without notice"`
  const text135 = `The following provision contained in Section 9.5. "Promo Codes" is not applicable to French consumers: "We reserve the right to refuse the issue of any Promo Code or Promo Code Offer at any time and to vary any and all elements of each offer at any time without notice"`
  const text136 = `The relevant laws of France will apply to these Terms and Conditions. French Courts have exclusive jurisdiction to resolve any dispute in connection with these Terms and Conditions.`
  const text137 = `The company providing the hosting services is Amazon Web Services (AWS). Contact details: Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, L-1855, Luxembourg.`
  const text138 = `Our customer service team will endeavour to resolve any queries you may have from your use of the booking service (whether accessed via our website or app). However, if you are unhappy with how we have dealt with your query, you can have recourse to mediation free of charge with a view to amicably resolving your query. To this end, Trainline has appointed the Tourism and Travel Mediator: M. Jean-Pierre Teyssier, MTV Médiation Tourisme Voyage, BP 80 303, 75823 Paris Cedex 17, http://www.mtv.travel.

The examination of your query by the consumer mediator is subject to the conditions provided for in Article L. 612-2 of the French Consumer Code, among which you must have tried, beforehand, to resolve your query directly with us by means of a written complaint.`
  const text139 = `Please see 8.11 French Discount Cards / SNCF Discount Cards for specific information on French Discount Cards.`

  const text141 = `Notwithstanding the other sections in these Terms and Conditions, the following terms apply to US residents buying a journey or a product on our website or our apps.

PLEASE READ THIS AGREEMENT CAREFULLY. IT SETS FORTH THE LEGALLY BINDING TERMS AND CONDITIONS FOR YOUR USE OF OUR SERVICE, SUCH AS YOUR GRANTS AND WAIVERS OF RIGHTS, THE LIMITATIONS OF OUR LIABILITY, YOUR INDEMNITY OF US, AND ARBITRATION OF CERTAIN DISPUTES.`
  const text142 = `OUR SITE, AND ALL CONTENTS, PRODUCTS AND SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH OUR SITE ARE PROVIDED ON AN ‘AS IS’ AND ‘AS AVAILABLE’ BASIS. WE MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF OUR SITE OR THE CONTENTS OR SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH OUR SITE, UNLESS OTHERWISE SPECIFIED IN WRITING. WE DO NOT WARRANT THAT YOUR USE OF OUR SITE WILL BE UNINTERRUPTED OR ERROR FREE, OR THAT OUR SITE OR ITS SERVER ARE FREE OF VIRUSES OR OTHER HARMFUL ELEMENTS. YOU EXPRESSLY AGREE, BY YOUR USE OF OUR SITE, THAT YOUR USE OF OUR SITE IS AT YOUR SOLE RISK, AND THAT YOU ASSUME FULL RESPONSIBILITY FOR ALL COSTS ASSOCIATED WITH ALL NECESSARY SERVICING OR REPAIRS OF ANY EQUIPMENT YOU USE IN CONNECTION WITH YOUR USE OF OUR SITE.

TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, WE AND OUR AFFILIATES DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, WE AND OUR AFFILIATES SHALL NOT BE LIABLE FOR DAMAGES, INJURY, CLAIM OR LIABILITY ARISING FROM OR RELATED TO YOUR USE OF, OR INABILITY TO USE, OUR SITE, OR FROM ANY INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) OR SERVICES INCLUDED ON, OR OTHERWISE MADE AVAILABLE TO YOU THROUGH, OUR SITE, INCLUDING, BUT NOT LIMITED TO, DIRECT OR INDIRECT LOST PROFITS OR LOST BUSINESS DAMAGES, INDIRECT, INCIDENTAL, PUNITIVE AND CONSEQUENTIAL DAMAGES. TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, YOU AGREE TO INDEMNIFY, DEFEND AND HOLD US, OUR AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES AND AGENTS, HARMLESS FROM AND AGAINST ANY AND ALL THIRD PARTY CLAIMS, DEMANDS, LIABILITIES, COSTS OR EXPENSES, INCLUDING REASONABLE ATTORNEYS' FEES, ARISING FROM OR RELATED TO THE PROHIBITED USES OF THIS SITE BY YOU, AND ANY OTHER BREACH OF THESE TERMS OF USE BY YOU. THE FOREGOING “DISCLAIMER, LIMITATION OF LIABILITY AND INDEMNITY” PROVISION MAY NOT APPLY TO CONSUMERS WITHIN THE STATE OF NEW JERSEY OR IN OTHER JURISDICTIONS WHERE PROHIBITED BY LAW.

IF YOU ARE DISSATISFIED WITH OUR SITE OR ANY MATERIALS ON OUR SITE, OR WITH ANY OF OUR TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING OUR SITE.`
  const text143 = `
14.1 Disclaimer, limitation of liability, and indemnity
14.2 Arbitration; class action waiver
The Federal Arbitration Act and federal arbitration law apply to this agreement.

You agree that the arbitration will be conducted by the American Arbitration Association (‘AAA’), https://www.adr.org, or 1.800.778.7879. You can contact AAA to find out more information on how to commence an arbitration proceeding. Payment of all filing, administration and arbitrator fees will be governed by the AAA’s applicable rules. You may choose to have the arbitration conducted by phone, based on written submissions, or in person in the county where you live or at another mutually agreed-upon location.

CLASS ACTION AND JURY TRIAL WAIVERS. You and we agree to bring any dispute in arbitration on an individual basis only, and not on a class, consolidated, aggregated, representative or collective action basis. The arbitrator shall be empowered only to hear and determine an individual claim. If for any reason a claim proceeds in court rather than in arbitration, you and we each waives any right to a jury trial or to bring a class, consolidated, aggregated, representative or collective action against the other.

ARBITRATIONS AND COURT ACTIONS DIFFER. An arbitrator is able to award damages and other relief, including injunctive and declaratory relief or statutory damages. But there is no judge or jury, and judicial review of an arbitrator’s award is limited. Discovery in arbitration is also limited in accord with AAA rules. In addition, as set forth above, you are waiving any ability for an arbitrator to oversee or determine class, consolidated, aggregated, representative or collective actions.

IMPORTANT: THIS SECTION LIMITS CERTAIN RIGHTS, INCLUDING THE RIGHT TO MAINTAIN A COURT ACTION, THE RIGHT TO A JURY TRIAL, AND THE RIGHT TO PARTICIPATE IN ANY FORM OF CLASS, CONSOLIDATED, AGGREGATED, REPRESENTATIVE OR COLLECTIVE ACTION. OTHER RIGHTS AND REMEDIES THAT YOU OR BUSA WOULD HAVE IN COURT ALSO MAY NOT BE AVAILABLE IN ARBITRATION.`
  const text151 = `Notwithstanding the other sections in these Terms and Conditions, the following terms apply to consumers located in Italy buying a journey or a product on our website or our apps.`
  const text152 = `The relevant laws of Italy will apply to these Terms and Conditions and the relevant Italian courts competent for your place of residence or domicile will have exclusive jurisdiction in relation to these Terms and Conditions.`
  const text153 = `In place of section 11, the following applies:


We act as an official agent on behalf of the operators. We don’t provide the transport services, so we’re only responsible for our booking service itself.


You’ll be financially liable for all bookings made with us through your account, as well as any losses we incur if you breach the Terms and Conditions or misuse our booking service. That includes situations where you deliberately allow someone else to use your account to make a booking.

We are not responsible for any loss or damage that is not foreseeable. Loss or damage is foreseeable if either it is obvious that it will happen or if, at the time the contract was made, both we and you knew it might happen. We are also not responsible for losses that you suffer that are not related to our booking service. Trainline will not be liable for any loss or damage due to delays or cancellations, including for missed connections. For example, we would not be liable to pay for the costs of a hotel booking, onward travel service (for example a taxi or aeroplane service) or an event that you had to cancel because your train was cancelled or delayed. Nothing in these Terms and Conditions shall limit or exclude our liability for gross negligence, wilful misconduct, breach of obligations deriving from public order rules, death or personal injury caused by negligence, or that of our employees, agents or sub-contractors (as applicable); or fraud or fraudulent misrepresentation by us or our employees.`
  return (
    <div>
      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick} />
      <div className="mobileabout text-item">
        <div className="container-fluid spacert">
          <h3>{appConstants.terms}</h3>
        </div>
      </div>
      <div className="py-4" style={{ background: '#e8e8e882' }}>
        <div className="row px-4"><h2 className="base-container-heading">Terms and Conditions</h2></div>
        <div className="row p-md-4" >



          <div className="col-md-8 ">
            <p className="pre-text">Last updated on 19th October 2022</p>

            <p>These Terms and Conditions include information about our booking services and on how you can manage your booking including about changes, refunds and cancellations and about payment methods.</p>

            <p>Just to note when we capitalise ‘Terms and Conditions’ it’s because we’re talking about ours, the ones you’re reading right now, and when it’s lowercase that means we’re talking about ones separate to these, like terms and conditions of the operators or third-parties. <br /><br />

              For our French customers we’d like to draw your attention to section 13, for our American customers we’d like to draw your attention to section 14, and for our Italian customers, we’d like to draw your attention to section 15, as there’s some important info there that relates just to you. <br /><br />

              Ready? OK, then let’s begin…</p>

          </div>
          <div className="col-md-4">
            <p className="pre-text">
              <strong>Read also</strong>
              <ul>
                <li><Link>Cookie Policy</Link></li>
                <li><Link>Privacy Policy</Link></li>
                <li><Link>Security Overview</Link></li>
                <li><Link>Information about our services and search ranking</Link></li>
                <li><Link>information</Link></li>
              </ul>
            </p>
          </div>
        </div>
      </div>




      <div id className=" container-fluid py-5">
      <h2 className="base-container-heading text-center"><span>What's in these terms?</span></h2>
        <div className="row base-container-header"><div className="col-xs-12 col-sm-10 col-md-8"></div></div><div className="row"><div className="base-container-item col-xs-12 col-sm-4 col-md-4"><div className="multi-column-container-wrapper"><div id="LL_html-0"><p><a href="#whoarewe" data-anchor="#whoarewe"><strong>1. Who we are</strong></a></p>
        <p>Get to know the Trainline Group</p>
        <p><a href="#contact" data-anchor="#contact"><strong>2. How to contact us</strong></a></p>
        <p>Email us or chat</p>
        <p><a href="#booking" data-anchor="#booking"><strong>3. Our services</strong></a></p>
        <p>Bookings, account and group travel</p>
        <p><a href="#tickets" data-anchor="#tickets"><strong>4. Tickets</strong></a></p>
        <p>Trains, coaches and buses</p>
        <p style={{ textAlign: 'left' }}><a href="#season" data-anchor="#season"><strong>5. Season Tickets</strong></a></p>
        <p>Flexis, Photocards, changes, refunds and more</p></div></div></div><div className="base-container-item col-xs-12 col-sm-4 col-md-4"><div className="multi-column-container-wrapper"><div id="LL_html-1"><p style={{ textAlign: 'left' }}><a href="#payment" data-anchor="#payment"><strong>6. Payment</strong></a></p>
          <p>Currency, cards, PayPal and more&nbsp;</p>
          <p style={{ textAlign: 'left' }}><a href="#change" data-anchor="#change"><strong>7. Changes, refunds and cancellations</strong></a></p>
          <p>Plus info on compensation</p>
          <p><a href="#railcards" data-anchor="#railcards"><strong>8. Discount Cards</strong></a></p>
          <p>Info on buying and using Railcards and other Discount Cards</p>
          <p style={{ textAlign: 'left' }}><a href="#add" data-anchor="#add"><strong>9. Additional products and services</strong></a></p>
          <p>Referrals, insurance and more</p>
          <p style={{ textAlign: 'left' }}><a href="#accept" data-anchor="#accept"><strong>10. Acceptance of Terms and Conditions</strong></a></p>
          <p style={{ textAlign: 'left' }}>Handy for skim readers</p></div></div></div><div className="base-container-item col-xs-12 col-sm-4 col-md-4"><div className="multi-column-container-wrapper"><div id="LL_html-2"><p style={{ textAlign: 'left' }}><a href="#liability" data-anchor="#liability"><strong>11. Liability</strong></a></p>
            <p>Who's responsible for what</p>
            <p style={{ textAlign: 'left' }}><a href="#other" data-anchor="#other"><strong>12. Other important stuff</strong></a></p>
            <p>IP rights, disputes and restrictions&nbsp;</p>
            </div></div></div></div></div>





      <div className="press">
        <div className="container-fluid">
          {/* <h2 className="line">{appConstants.terms}</h2> */}
          {/* <div className="text-line" style={{ paddingBottom: '20px' }}>
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div> */}

          <div className="">
            <div className="row py-3" id="whoarewe">
              <div className="col-md-4 col-sm-6 col-10 mx-auto d-flex justify-content-center">
                <img src="https://www.thetrainline.com/cms/media/3794/pictogram_trainline_info_2x.png?width=384height=500" className="img-fluid mt-5" height={"200px"} alt="" />

              </div>
              <div className="col-md-8 col-sm-10 col-10 mx-auto align-items-center justify-content-center" >

                <h2 className="base-container-heading" >1. Who We Are ?</h2>

                <p className="what-we-do-para">The Trainline Group, that’s us, is made up of –</p>

                <ol className="what-we-do-list" style={{ listStyleType: 'disc' }}>
                  <li className="what-we-do-list-item"><strong>Trainline.com Limited</strong> a company registered in England (company registration number 3846791) with a registered office in the heart of London at 120 Holborn, London, EC1N 2TD; and</li>
                  <li className="what-we-do-list-item"><strong>Trainline SAS</strong>a simplified joint-stock company (number 512 277 450 in the Trade and Companies Register of Paris, VAT number: FR 58 512 277 450), share capital of €1,766,960.14), with a registered office in the chic French capital, Paris (75009). You can find our Paris office at 20 rue Saint-Georges.</li>
                  <ol className="my-2" style={{ listStyleType: 'circle' }}>
                    <li className="my-1">We are registered with the French Register of Travel Agents and Tour Operators, Atout France, under number IM078100022. Atout France is located at 79-81, rue de Clichy, 75009 Paris, France.</li>
                    <li className="my-1">Our financial guarantee Atradius Crédit Insurance NV can be found at 44 avenue Georges Pompidou, 92300 Levallois Perret CEDEX</li>
                    <li className="my-1">Our civil liability insurance MMA IARD can be found at 14 boulevard Marie et Alexandre Oyon, 72030 Le Mans</li>
                  </ol>

                </ol>
                <p className="my-2">Whenever we say “us” we mean The Trainline Group and whenever we say “you” then we’re referring to a “user” or “customer” of our services.</p>

              </div>
            </div>
            <div className="row py-3" id="contact">
              <div className="col-md-4 col-sm-6 col-10 mx-auto d-flex justify-content-center">
                <img src="https://www.thetrainline.com/cms/media/3794/pictogram_trainline_info_2x.png?width=384height=500" className="  mt-5" style={{ width: "100%", height: "auto", objectFit: "contain" }} alt="" />

              </div>
              <div className="col-md-8 col-sm-10 col-10 mx-auto align-items-center justify-content-center">

                <h2 className="base-container-heading" >2. How to contact us</h2>



                <div className="faq-accordian">
                  <h2 className="line">
                    {/* {appConstants.frequent}
              <span className="color-d"> {appConstants.Asked}</span>{" "}
              {appConstants.Questions} */}
                  </h2>
                  {/* <div className="text-line">
                            <img src={images.border1} style={{ width: '400px' }} />
                        </div> */}
                  <div className="accordion">
                    <Collapse accordion>
                      <Panel
                        header="  2.1 Email us "
                        key="1"
                      >
                        <p >{text1}</p>
                      </Panel>
                      <Panel
                        header="2.2 Chat to us"
                        key="2"
                      >
                        <p>{text2}</p>
                      </Panel>
                      <Panel
                        header="2.3 Give us a call "
                        key="3"
                      >
                        <p>{text3}</p>
                      </Panel>

                    </Collapse>
                  </div>
                </div>

              </div>
            </div>
            <div className="row py-3"  id="booking">
              <div className="col-md-4 col-sm-6 col-10 mx-auto d-flex justify-content-center">
                <img src="https://www.thetrainline.com/cms/media/3794/pictogram_trainline_info_2x.png?width=384height=500" className="  mt-5" style={{ width: "100%", height: "auto", objectFit: "contain" }} alt="" />

              </div>
              <div className="col-md-8 col-sm-10 col-10 mx-auto align-items-center justify-content-center">

                <h2 className="base-container-heading">3. Our services</h2>


                <div className="faq-accordian">
                  <h2 className="line">
                    {/* {appConstants.frequent}
              <span className="color-d"> {appConstants.Asked}</span>{" "}
              {appConstants.Questions} */}
                  </h2>
                  {/* <div className="text-line">
                            <img src={images.border1} style={{ width: '400px' }} />
                        </div> */}
                  <div className="accordion">
                    <Collapse accordion>
                      <Panel
                        header="3.1 Use of our services "
                        key="1"
                      >
                        <div>{text31}</div>
                      </Panel>
                      <Panel
                        header="3.2 Creating an account or checking out as a guest "
                        key="2"
                      >
                        <pre className="p-3 pre-text">{text32}</pre>
                      </Panel>
                      <Panel
                        header="3.3 Group bookings"
                        key="3"
                      >
                        <pre className="p-3 pre-text">{text33}</pre>
                      </Panel>

                    </Collapse>
                  </div>
                </div>

              </div>
            </div>
            <div className="row py-3" id="tickets">
              <div className="col-md-4 col-sm-6 col-10 mx-auto d-flex justify-content-center">
                <img src="https://www.thetrainline.com/cms/media/3794/pictogram_trainline_info_2x.png?width=384height=500" className="  mt-5" style={{ width: "100%", height: "auto", objectFit: "contain" }} alt="" />

              </div>
              <div className="col-md-8 col-sm-10 col-10 mx-auto align-items-center justify-content-center">

                <h2 className="base-container-heading" >4. Tickets</h2>


                <div className="faq-accordian">
                  <h2 className="line">
                    {/* {appConstants.frequent}
              <span className="color-d"> {appConstants.Asked}</span>{" "}
              {appConstants.Questions} */}
                  </h2>
                  {/* <div className="text-line">
                            <img src={images.border1} style={{ width: '400px' }} />
                        </div> */}
                  <div className="accordion">
                    <Collapse accordion>
                      <Panel
                        header="4.1 General Information "
                        key="1"
                      >
                        <pre className="p-3 pre-text">{text41}</pre>
                      </Panel>
                      <Panel
                        header="4.2 Getting your ticket"
                        key="2"
                      >
                        <pre className="p-3 pre-text">{text42}</pre>
                      </Panel>
                      <Panel
                        header="4.3 etickets  "
                        key="3"
                      >
                        <pre className="p-3 pre-text">{text43}</pre>
                      </Panel>
                      <Panel
                        header="4.4 Mobile Tickets  "
                        key="4"
                      >
                        <pre className="p-3 pre-text">{text44}</pre>
                      </Panel>
                      <Panel
                        header="4.5 Collecting tickets at the station  "
                        key="5"
                      >
                        <pre className="p-3 pre-text">{text45}</pre>
                      </Panel>
                      <Panel
                        header="4.6 Collecting tickets at the station "
                        key="6"
                      >
                        <pre className="p-3 pre-text">{text46}</pre>
                      </Panel>
                    </Collapse>
                  </div>
                </div>

              </div>
            </div>
            <div className="row py-3" id="season">
              <div className="col-md-4 col-sm-6 col-10 mx-auto d-flex justify-content-center">
                <img src="https://www.thetrainline.com/cms/media/3794/pictogram_trainline_info_2x.png?width=384height=500" className="  mt-5" style={{ width: "100%", height: "auto", objectFit: "contain" }} alt="" />

              </div>
              <div className="col-md-8 col-sm-10 col-10 mx-auto align-items-center justify-content-center">

                <h2 className="base-container-heading" >5. UK Season Tickets</h2>


                <div className="faq-accordian">
                  <h2 className="line">
                    {/* {appConstants.frequent}
              <span className="color-d"> {appConstants.Asked}</span>{" "}
              {appConstants.Questions} */}
                  </h2>
                  {/* <div className="text-line">
                            <img src={images.border1} style={{ width: '400px' }} />
                        </div> */}
                  <div className="accordion">
                    <Collapse accordion>
                      <Panel
                        header="5.1 Using your Season Ticket  "
                        key="1"
                      >
                        <pre className="p-3 pre-text">{text51}</pre>
                      </Panel>
                      <Panel
                        header="5.2 Travel not covered by your Season Ticket"
                        key="2"
                      >
                        <pre className="p-3 pre-text">{text52}</pre>
                      </Panel>
                      <Panel
                        header="5.3 Photocards"
                        key="3"
                      >
                        <pre className="p-3 pre-text"> {text53}</pre>
                      </Panel>
                      <Panel
                        header="5.4 Damaged or faded Season Tickets "
                        key="4"
                      >
                        <pre className="p-3 pre-text">{text54}</pre>
                      </Panel>
                      <Panel
                        header="5.5 Replacement Season Tickets"
                        key="5"
                      >
                        <pre className="p-3 pre-text">{text55}</pre>
                      </Panel>
                      <Panel
                        header="5.6 Season Ticket refunds "
                        key="6"
                      >
                        <pre className="p-3 pre-text">{text56}</pre>
                      </Panel>
                      <Panel
                        header="5.7 Changing Your Season Tickets "
                        key="7"
                      >
                        <pre className="p-3 pre-text">{text57}</pre>
                      </Panel>
                    </Collapse>
                  </div>
                </div>

              </div>
            </div>
            <div className="row py-3" id="payment">
              <div className="col-md-4 col-sm-6 col-10 mx-auto d-flex justify-content-center">
                <img src="https://www.thetrainline.com/cms/media/3794/pictogram_trainline_info_2x.png?width=384height=500" className="  mt-5" style={{ width: "100%", height: "auto", objectFit: "contain" }} alt="" />

              </div>
              <div className="col-md-8 col-sm-10 col-10 mx-auto align-items-center justify-content-center">

                <h2 className="base-container-heading" >6. Payment</h2>


                <div className="faq-accordian">
                  <h2 className="line">
                    {/* {appConstants.frequent}
              <span className="color-d"> {appConstants.Asked}</span>{" "}
              {appConstants.Questions} */}
                  </h2>
                  {/* <div className="text-line">
                            <img src={images.border1} style={{ width: '400px' }} />
                        </div> */}
                  <div className="accordion">
                    <Collapse accordion>
                      <Panel
                        header="6.1 Payment methods "
                        key="1"
                      >
                        <pre className="p-3 pre-text">{text61}</pre>
                      </Panel>
                      <Panel
                        header="6.2 Multi-currency booking feature"
                        key="2"
                      >
                        <pre className="p-3 pre-text">{text62}</pre>
                      </Panel>
                      <Panel
                        header="6.3 Fees "
                        key="3"
                      >
                        <pre className="p-3 pre-text">{text63}</pre>
                      </Panel>

                    </Collapse>
                  </div>
                </div>

              </div>
            </div>
            <div className="row py-3" id="change">
              <div className="col-md-4 col-sm-6 col-10 mx-auto d-flex justify-content-center">
                <img src="https://www.thetrainline.com/cms/media/3794/pictogram_trainline_info_2x.png?width=384height=500" className="  mt-5" style={{ width: "100%", height: "auto", objectFit: "contain" }} alt="" />

              </div>
              <div className="col-md-8 col-sm-10 col-10 mx-auto align-items-center justify-content-center">

                <h2 className="base-container-heading">7. Changes, refunds and cancellations</h2>


                <div className="faq-accordian">
                  <h2 className="line">
                    {/* {appConstants.frequent}
              <span className="color-d"> {appConstants.Asked}</span>{" "}
              {appConstants.Questions} */}
                  </h2>
                  {/* <div className="text-line">
                            <img src={images.border1} style={{ width: '400px' }} />
                        </div> */}
                  <div className="accordion">
                    <Collapse accordion>
                      <Panel
                        header="7.1 General Information"
                        key="1"
                      >
                        <pre className="p-3 pre-text">{text71}</pre>
                      </Panel>
                      <Panel
                        header="7.2 Rail travel in the UK "
                        key="2"
                      >
                        <pre className="p-3 pre-text">{text72}</pre>
                      </Panel>
                      <Panel
                        header="7.3 Rail Travel outside of the UK "
                        key="3"
                      >
                        <pre className="p-3 pre-text">{text73}</pre>
                      </Panel>
                      <Panel
                        header="7.4 Coach and bus travel in the UK"
                        key="4"
                      >
                        <pre className="p-3 pre-text">{text74}</pre>
                      </Panel>
                      <Panel
                        header="7.5 Coach and bus travel outside the UK"
                        key="5"
                      >
                        <pre className="p-3 pre-text">{text75}</pre>
                      </Panel>
                      <Panel
                        header="7.6 Compensation for delayed or cancelled journeys"
                        key="6"
                      >
                        <pre className="p-3 pre-text">{text76}</pre>
                      </Panel>
                      <Panel
                        header="7.7 Combined bookings and connections"
                        key="7"
                      >
                        <pre className="p-3 pre-text">{text77}</pre>
                      </Panel>
                    </Collapse>
                  </div>
                </div>

              </div>
            </div>
            <div className="row py-3" id="railcards">
              <div className="col-md-4 col-sm-6 col-10 mx-auto d-flex justify-content-center">
                <img src="https://www.thetrainline.com/cms/media/3794/pictogram_trainline_info_2x.png?width=384height=500" className="  mt-5" style={{ width: "100%", height: "auto", objectFit: "contain" }} alt="" />

              </div>
              <div className="col-md-8 col-sm-10 col-10 mx-auto align-items-center justify-content-center">

                <h2 className="base-container-heading">8. Discount Cards</h2>


                <div className="faq-accordian">
                  <h2 className="line">
                    {/* {appConstants.frequent}
              <span className="color-d"> {appConstants.Asked}</span>{" "}
              {appConstants.Questions} */}
                  </h2>
                  {/* <div className="text-line">
                            <img src={images.border1} style={{ width: '400px' }} />
                        </div> */}
                  <div className="accordion">
                    <Collapse accordion>
                      <Panel
                        header="8.1 What are Discount Cards?"
                        key="1"
                      >
                        <pre className="p-3 pre-text">{text81}</pre>
                      </Panel>
                      <Panel
                        header="8.2 Buying Digital Discount Cards"
                        key="2"
                      >
                        <pre className="p-3 pre-text">{text82}</pre>
                      </Panel>
                      <Panel
                        header="8.3 General conditions of use Railcard"
                        key="3"
                      >
                        <pre className="p-3 pre-text">{text83}</pre>
                      </Panel>
                      <Panel
                        header="8.4 Family and Friends Railcard"
                        key="4"
                      >
                        <pre className="p-3 pre-text">{text84}</pre>
                      </Panel>
                      <Panel
                        header="8.5 Network Railcard"
                        key="5"
                      >
                        <pre className="p-3 pre-text">{text85}</pre>
                      </Panel>
                      <Panel
                        header="8.6 Two Together Railcard"
                        key="6"
                      >
                        <pre className="p-3 pre-text">{text86}</pre>
                      </Panel>
                      <Panel
                        header="8.7 16-25 Railcard"
                        key="7"
                      >
                        <pre className="p-3 pre-text">{text87}</pre>
                      </Panel>
                      <Panel
                        header="8.8 26-30 Railcard"
                        key="8"
                      >
                        <pre className="p-3 pre-text">{text88}</pre>
                      </Panel>
                      <Panel
                        header="8.9 Senior Railcard"
                        key="9"
                      >
                        <pre className="p-3 pre-text">{text89}</pre>
                      </Panel>
                      <Panel
                        header="8.10 16-17 Saver"
                        key="10"
                      >
                        <pre className="p-3 pre-text">{text810}</pre>
                      </Panel>
                      <Panel
                        header="8.11 French Discount Cards / SNCF Discount Cards"
                        key="11"
                      >
                        <pre className="p-3 pre-text">{text811}</pre>
                      </Panel>
                    </Collapse>
                  </div>
                </div>

              </div>
            </div>
            <div className="row py-3" id="add">
              <div className="col-md-4 col-sm-6 col-10 mx-auto d-flex justify-content-center">
                <img src="https://www.thetrainline.com/cms/media/3794/pictogram_trainline_info_2x.png?width=384height=500" className="  mt-5" style={{ width: "100%", height: "auto", objectFit: "contain" }} alt="" />

              </div>
              <div className="col-md-8 col-sm-10 col-10 mx-auto align-items-center justify-content-center">

                <h2 className="base-container-heading">9. Additional Trainline Services</h2>


                <div className="faq-accordian">
                  <h2 className="line">
                    {/* {appConstants.frequent}
              <span className="color-d"> {appConstants.Asked}</span>{" "}
              {appConstants.Questions} */}
                  </h2>
                  {/* <div className="text-line">
                            <img src={images.border1} style={{ width: '400px' }} />
                        </div> */}
                  <div className="accordion">
                    <Collapse accordion>
                      <Panel
                        header="9.1 Refer-a-friend scheme"
                        key="1"
                      >
                        <pre className="p-3 pre-text">{text91}</pre>
                      </Panel>
                      <Panel
                        header="9.2 Trainline for Business"
                        key="2"
                      >
                        <pre className="p-3 pre-text">{text92}</pre>
                      </Panel>
                      <Panel
                        header="9.3 Third-party products and services "
                        key="3"
                      >
                        <pre className="p-3 pre-text">{text93}</pre>
                      </Panel>
                      <Panel
                        header="9.4 Insurance"
                        key="4"
                      >
                        <pre className="p-3 pre-text">{text94}</pre>
                      </Panel>
                      <Panel
                        header="9.5 Promo Codes"
                        key="5"
                      >
                        <pre className="p-3 pre-text">{text95}</pre>
                      </Panel>
                      <Panel
                        header="9.6 SplitSave tickets in the UK"
                        key="6"
                      >
                        <pre className="p-3 pre-text">{text96}</pre>
                      </Panel>
                      <Panel
                        header="9.7 Prix Futés in France"
                        key="7"
                      >
                        <pre className="p-3 pre-text">{text97}</pre>
                      </Panel>
                    </Collapse>
                  </div>
                </div>

              </div>
            </div>
            <div className="row py-3" id="accept">
              <div className="col-md-4 col-sm-6 col-10 mx-auto d-flex justify-content-center">
                <img src="https://www.thetrainline.com/cms/media/3794/pictogram_trainline_info_2x.png?width=384height=500" className="img-fluid mt-5" height={"200px"} alt="" />

              </div>
              <div className="col-md-8 col-sm-10 col-10 mx-auto align-items-center justify-content-center">

                <h2 className="base-container-heading">10. Acceptance of Terms and Conditions</h2>

                <p>By using our booking service or making a booking with us, you’re agreeing that</p>
                <ul className="what-we-do-list">

                  <li className="what-we-do-list-item">you’ve received these Terms and Conditions in a way that you can understand clearly you accept the most recent version fully</li>
                  <li className="what-we-do-list-item">you’re committed to paying for the tickets you book</li>

                </ul>
                <p className="mb-2">We like to stay relevant, so these Terms and Conditions may change sometime in the future. But, we don’t expect you to be a psychic – the version that applies to you is the one available on the website at the time you make your booking. If you don’t agree with and accept the most recent Terms and Conditions, you’ll have to stop using our booking service, website and apps.</p>
                <p className="mb-2">By accepting these Terms and Conditions, you’re agreeing that there’s no partnership, employment or agency relationship between us. Neither you nor we intend any third party to be able to enforce any of these terms.</p>

              </div>
            </div>
            <div className="row py-3" id="liability">
              <div className="col-md-4 col-sm-6 col-10 mx-auto d-flex justify-content-center">
                <img src="https://www.thetrainline.com/cms/media/3794/pictogram_trainline_info_2x.png?width=384height=500" className="img-fluid mt-5" height={"200px"} alt="" />

              </div>
              <div className="col-md-8 col-sm-10 col-10 mx-auto align-items-center justify-content-center">

                <h2 className="base-container-heading" >11. Liability</h2>

                <p>We act as an official agent on behalf of the operators. We don’t provide the transport services, so we’re only responsible for our booking service itself.</p>


                <p className="what-we-do-list-item">You’ll be financially liable for all bookings made with us through your account, as well as any losses we incur if you breach the Terms and Conditions or misuse our booking service. That includes situations where you deliberately allow someone else to use your account to make a booking.</p>
                <p className="what-we-do-list-item">We are not responsible for any loss or damage that is not foreseeable. Loss or damage is foreseeable if either it is obvious that it will happen or if, at the time the contract was made, both we and you knew it might happen. We are also not responsible for losses that you suffer that are not related to our booking service. Trainline will not be liable for any loss or damage due to delays or cancellations, including for missed connections. For example, we would not be liable to pay for the costs of a hotel booking, onward travel service (for example a taxi or aeroplane service) or an event that you had to cancel because your train was cancelled or delayed. Nothing in these Terms and Conditions shall limit or exclude our liability for death or personal injury caused by negligence, or that of our employees, agents or sub-contractors (as applicable); or fraud or fraudulent misrepresentation by us or our employees.</p>



              </div>
            </div>
            <div className="row py-3" id="other">
              <div className="col-md-4 col-sm-6 col-10 mx-auto d-flex justify-content-center">
                <img src="https://www.thetrainline.com/cms/media/3794/pictogram_trainline_info_2x.png?width=384height=500" className="  mt-5" style={{ width: "100%", height: "auto", objectFit: "contain" }} alt="" />

              </div>
              <div className="col-md-8 col-sm-10 col-10 mx-auto align-items-center justify-content-center">

                <h2 className="base-container-heading">12. Other important stuff</h2>


                <div className="faq-accordian">
                  <h2 className="line">
                    {/* {appConstants.frequent}
              <span className="color-d"> {appConstants.Asked}</span>{" "}
              {appConstants.Questions} */}
                  </h2>
                  {/* <div className="text-line">
                            <img src={images.border1} style={{ width: '400px' }} />
                        </div> */}
                  <div className="accordion">
                    <Collapse accordion>
                      <Panel
                        header="12.1 Right of withdrawal"
                        key="1"
                      >
                        <pre className="p-3 pre-text">{text121}</pre>
                      </Panel>
                      <Panel
                        header="12.2 Using Trainline"
                        key="2"
                      >
                        <pre className="p-3 pre-text">{text122}</pre>
                      </Panel>
                      <Panel
                        header="12.3 Linked Travel Arrangements "
                        key="3"
                      >
                        <pre className="p-3 pre-text">{text123}</pre>
                      </Panel>
                      <Panel
                        header="12.4 Intellectual property"
                        key="4"
                      >
                        <pre className="p-3 pre-text">{text124}</pre>
                      </Panel>
                      <Panel
                        header="12.5 Proof, disputes and alternate dispute resolution"
                        key="5"
                      >
                        <pre className="p-3 pre-text">{text125}</pre>
                      </Panel>
                      <Panel
                        header="12.6 Governing law and jurisdiction"
                        key="6"
                      >
                        <pre className="p-3 pre-text">{text126}</pre>
                      </Panel>

                    </Collapse>
                  </div>
                </div>

              </div>
            </div>
            {/* <div className="row py-3">
            <div className="col-md-4 col-sm-6 col-10 mx-auto d-flex justify-content-center">
                <img src="https://www.thetrainline.com/cms/media/3794/pictogram_trainline_info_2x.png?width=384height=500" className="  mt-5" style={{width:"100%",height:"auto" , objectFit:"contain"}} alt="" />

            </div>
            <div className="col-md-8 col-sm-10 col-10 mx-auto align-items-center justify-content-center">

                    <h2 className="base-container-heading">13. Customers from France</h2>


                    <div className="faq-accordian">
           
            
            <div className="accordion">
              <Collapse accordion>
                
                <Panel
                  header="13.1 Creating an account or checking out as a guest"
                  key="3"
                >
                 <pre className="p-3 pre-text">{text131}</pre>
                </Panel>
                <Panel
                  header="13.2. Payment method"
                  key="4"
                >
                 <pre className="p-3 pre-text">{text132}</pre>
                </Panel>
                <Panel
                  header="13.3. Refer-a-Friend Scheme"
                  key="5"
                >
                  <pre className="p-3 pre-text">{text133}</pre>
                </Panel>
                <Panel
                  header="13.4. Promo codes"
                  key="6"
                >
               <pre className="p-3 pre-text">{text134}</pre>
                </Panel>
                <Panel
                  header="13.5 Liability"
                  key="7"
                >
               <pre className="p-3 pre-text">{text135}</pre>
                </Panel>
              </Collapse>
            </div>
          </div>

            </div>
           </div> */}
          </div>
        </div>
      </div>
      <Icon1 handleClick={handlewClick} />
      <FooterMain />
    </div>
  );
};
export default TermsConditions;
