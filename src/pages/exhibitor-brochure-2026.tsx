import React from "react";

const ExhibitorBrochure2026 = () => {
  return (
    <>
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#64a63a] to-[#b8f337] py-8 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Download our 2026 Exhibitor Brochure
        </h1>
      </div>

      {/* Introductory Text */}
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg text-gray-700">
          Want to maximise your exposure at Mining Indaba 2026? Download our
          exclusive exhibitor brochure now and discover how you can showcase
          your brand of the industry&apos;s premier event!
        </p>
      </div>

      {/* Main Content: Brochure Image and Form */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-12">
        {/* Left Column: Brochure Image and Enquire Section */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <img
            src="/placeholder-brochure.png" // Placeholder image
            alt="2026 Exhibitor Brochure"
            className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg"
          />

          <div className="mt-8 w-full md:w-2/3 lg:w-1/2">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Gain access to:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                Details about Mining Indaba, Africa&apos;s premier mining event,
                happening from 9-12 February 2026 in Cape Town
              </li>
              <li>
                Exhibitor and sponsorship opportunities at Mining Indaba 2026
              </li>
              <li>Insights into our audience types — your potential leads!</li>
            </ul>
            <p className="text-gray-700 mb-6">
              To discuss the floorplan and exhibiting or sponsorship
              opportunities, simply click &quot;Enquire&quot; below, and a
              member of our team will get in touch with you.
            </p>
            <button className="bg-[#64a63a] hover:bg-[#55952c] text-white font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide">
              ENQUIRE
            </button>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex-1 w-full">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First name*
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last name*
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm bg-white"
              />
              <p className="mt-2 text-sm text-gray-500">
                Using a business email helps us better understand your interest
                in sponsoring.
              </p>
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number*
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <select
                  id="countryCode"
                  name="countryCode"
                  className="rounded-none rounded-l-md border-gray-300 focus:border-gray-400 focus:ring-gray-400 sm:text-sm bg-white"
                >
                  <option value="">Select Country Code</option>
                  <option value="+1">United States (+1)</option>
                  <option value="+44">United Kingdom (+44)</option>
                  <option value="+27">South Africa (+27)</option>
                  <option value="+61">Australia (+61)</option>
                  <option value="+1">Canada (+1)</option>
                  <option value="+49">Germany (+49)</option>
                  <option value="+33">France (+33)</option>
                  <option value="+86">China (+86)</option>
                  <option value="+91">India (+91)</option>
                  <option value="+55">Brazil (+55)</option>
                  <option value="+7">Russia (+7)</option>
                  <option value="+81">Japan (+81)</option>
                  <option value="+260">Zambia (+260)</option>
                  <option value="+263">Zimbabwe (+263)</option>
                  <option value="+258">Mozambique (+258)</option>
                  <option value="+264">Namibia (+264)</option>
                  <option value="+267">Botswana (+267)</option>
                  <option value="+254">Kenya (+254)</option>
                  <option value="+255">Tanzania (+255)</option>
                  <option value="+256">Uganda (+256)</option>
                  <option value="+233">Ghana (+233)</option>
                  <option value="+234">Nigeria (+234)</option>
                  <option value="+243">DR Congo (+243)</option>
                  <option value="+244">Angola (+244)</option>
                  <option value="+250">Rwanda (+250)</option>
                  {/* Add more country code options here */}
                </select>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-gray-400 focus:ring-gray-400 sm:text-sm bg-white"
                  placeholder="e.g., 8123 456789"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country*
              </label>
              <select
                id="country"
                name="country"
                className="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm bg-white"
              >
                <option>Please Select</option>
                <option value="AF">Afghanistan</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">Congo, Democratic Republic of the</option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Cote D'Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and Mcdonald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran, Islamic Republic of</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">
                  Korea, Democratic People's Republic of
                </option>
                <option value="KR">Korea, Republic of</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libyan Arab Jamahiriya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK">
                  Macedonia, The Former Yugoslav Republic of
                </option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="AN">Netherlands Antilles</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestinian Territory, Occupied</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Reunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="SH">Saint Helena</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="CS">Serbia and Montenegro</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">
                  South Georgia and the South Sandwich Islands
                </option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands, British</option>
                <option value="VI">Virgin Islands, U.S.</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company name*
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm bg-white border-gray-700"
              />
            </div>
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Job title*
              </label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="jobFunction"
                className="block text-sm font-medium text-gray-700"
              >
                Job function*
              </label>
              <select
                id="jobFunction"
                name="jobFunction"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm bg-white"
              >
                <option>Please Select</option>
                <option value="academic_student">Academic or Student</option>
                <option value="account_management">Account Management</option>
                <option value="administration">Administration</option>
                <option value="administrative_operations">
                  Administrative/Operations
                </option>
                <option value="ceo_md">CEO/MD</option>
                <option value="consultancy_advisory">
                  Consultancy & Advisory
                </option>
                <option value="consultant">Consultant</option>
                <option value="design_engineering_product_design">
                  Design Engineering & Product Design
                </option>
                <option value="distribution_management">
                  Distribution Management
                </option>
                <option value="editorial_content_journalism">
                  Editorial Content & Journalism
                </option>
                <option value="electrical_engineering">
                  Electrical Engineering
                </option>
                <option value="engineer">Engineer</option>
                <option value="event_management">Event Management</option>
                <option value="finance">Finance</option>
                <option value="general_corporate_management">
                  General & Corporate Management
                </option>
                <option value="general_management">General Management</option>
                <option value="government">Government</option>
                <option value="industrial_engineering">
                  Industrial Engineering
                </option>
                <option value="manufacturing_engineering">
                  Manufacturing Engineering
                </option>
              </select>
            </div>
            <div>
              <label
                htmlFor="sector"
                className="block text-sm font-medium text-gray-700"
              >
                Sector*
              </label>
              <select
                id="sector"
                name="sector"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm bg-white"
              >
                <option>Please Select</option>
                <option value="precious_metals">Precious Metals</option>
                <option value="base_metals">Base Metals</option>
                <option value="bulk_minerals">Bulk Minerals</option>
                <option value="industrial_minerals">Industrial Minerals</option>
                <option value="gemstones">Gemstones</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Privacy Policy Text */}
            <p className="mt-4 text-sm text-gray-600">
              Hyve Group takes your privacy seriously - you can read more about
              this in our{" "}
              <a href="#" className="text-[#64a63a] hover:underline">
                Privacy Notice
              </a>
              . We use your personal information to provide the services you
              have requested from us and for other carefully considered
              legitimate business purposes. This includes sending you marketing
              communications and advertising about our events as well as
              information and publications which we think would be of interest
              to you. You have the right to object to this processing and, if
              you wish to do so, you can{" "}
              <a href="#" className="text-[#64a63a] hover:underline">
                update your preferences here
              </a>
              . View a list of the events organised by{" "}
              <a href="#" className="text-[#64a63a] hover:underline">
                Hyve Group here
              </a>
              .
            </p>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-[#64a63a] hover:bg-[#55952c] text-white font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ExhibitorBrochure2026;
