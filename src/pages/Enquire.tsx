import React from "react";

const Enquire = () => {
  return (
    <>
      {/* Header with gradient background */}
      <div className="w-full py-8 text-white text-center bg-gradient-to-r from-[#64a63a] to-[#b8f337]">
        <h1 className="text-4xl md:text-5xl font-bold">Enquire for 2026</h1>
      </div>
      {/* Descriptive text */}
      <div className="py-8 text-center text-lg text-gray-700">
        <p>
          Interested in sponsorship opportunities or exhibiting at Mining Indaba
          2026? Complete the form to enquire about available opportunities now!
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
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
              autoComplete="given-name"
              className="mt-1 block w-full border border-black bg-gray-100"
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
              autoComplete="family-name"
              className="mt-1 block w-full border border-black bg-gray-100"
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
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-1 block w-full border border-black bg-gray-100"
            />
            <p className="mt-2 text-sm text-gray-500">
              Using a company email helps us process your enquiry faster.
              Gmail/Yahoo addresses may require additional verification.
            </p>
          </div>

          <div>
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Contact number*
            </label>
            <div className="mt-1 flex">
              <select
                id="countryCode"
                name="countryCode"
                autoComplete="country-code"
                className="border border-black bg-gray-100"
              >
                <option>Rwanda</option>
              </select>
              <input
                type="text"
                name="contactNumber"
                id="contactNumber"
                autoComplete="tel-national"
                className="block w-full border border-black bg-gray-100"
                defaultValue="+250"
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
              autoComplete="country-name"
              className="mt-1 block w-full border border-black bg-gray-100"
            >
              <option value="">Please Select</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Côte d'Ivoire">Côte d'Ivoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Democratic Republic of the Congo">
                Democratic Republic of the Congo
              </option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Eswatini">Eswatini</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Greece">Greece</option>
              <option value="Grenada">Grenada</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Honduras">Honduras</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia">Micronesia</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="North Korea">North Korea</option>
              <option value="North Macedonia">North Macedonia</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestine State">Palestine State</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Qatar">Qatar</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Vincent and the Grenadines">
                Saint Vincent and the Grenadines
              </option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">
                Sao Tome and Principe
              </option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Korea">South Korea</option>
              <option value="South Sudan">South Sudan</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican City">Vatican City</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
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
              autoComplete="organization"
              className="mt-1 block w-full border border-black bg-gray-100"
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
              autoComplete="organization-title"
              className="mt-1 block w-full border border-black bg-gray-100"
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
              autoComplete="off"
              className="mt-1 block w-full border border-black bg-gray-100"
            >
              <option value="">Please Select</option>
              <option value="Analyst">Analyst</option>
              <option value="Broker">Broker</option>
              <option value="CEO/President">CEO/President</option>
              <option value="CFO">CFO</option>
              <option value="Chairperson">Chairperson</option>
              <option value="Commercial Manager">Commercial Manager</option>
              <option value="Consultant">Consultant</option>
              <option value="Director">Director</option>
              <option value="Engineer">Engineer</option>
              <option value="Exploration Manager">Exploration Manager</option>
              <option value="Fund Manager">Fund Manager</option>
              <option value="Geologist">Geologist</option>
              <option value="Head of Department">Head of Department</option>
              <option value="Investor">Investor</option>
              <option value="Legal Counsel">Legal Counsel</option>
              <option value="Marketing Manager">Marketing Manager</option>
              <option value="Operations Manager">Operations Manager</option>
              <option value="Portfolio Manager">Portfolio Manager</option>
              <option value="Project Manager">Project Manager</option>
              <option value="Research Analyst">Research Analyst</option>
              <option value="Sales Manager">Sales Manager</option>
              <option value="Senior Management">Senior Management</option>
              <option value="Site Manager">Site Manager</option>
              <option value="Student">Student</option>
              <option value="Technical Manager">Technical Manager</option>
              <option value="Vice President">Vice President</option>
              <option value="Other">Other</option>
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
              autoComplete="off"
              className="mt-1 block w-full border border-black bg-gray-100"
            >
              <option value="">Please Select</option>
              <option value="Academic/Research">Academic/Research</option>
              <option value="Association">Association</option>
              <option value="Bank">Bank</option>
              <option value="Consultancy (incl. Engineering/Technical)">
                Consultancy (incl. Engineering/Technical)
              </option>
              <option value="Embassy/Trade Commission">
                Embassy/Trade Commission
              </option>
              <option value="Equipment/Service Provider">
                Equipment/Service Provider
              </option>
              <option value="Government/Ministry">Government/Ministry</option>
              <option value="Investment Firm">Investment Firm</option>
              <option value="Legal">Legal</option>
              <option value="Logistics/Transportation">
                Logistics/Transportation
              </option>
              <option value="Media">Media</option>
              <option value="Mining Company">Mining Company</option>
              <option value="NGO">NGO</option>
              <option value="Other">Other</option>
              <option value="Private Equity">Private Equity</option>
              <option value="Security">Security</option>
              <option value="Service Provider">Service Provider</option>
              <option value="Smelter/Refinery">Smelter/Refinery</option>
              <option value="Solution Provider">Solution Provider</option>
              <option value="Trading House">Trading House</option>
              <option value="Utilities">Utilities</option>
            </select>
          </div>

          <div className="text-sm text-gray-600">
            <p>
              Hyve Group takes your privacy seriously – you can read more about
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
              .{" "}
              <a href="#" className="text-[#64a63a] hover:underline">
                View a list of the events organised by Hyve Group here
              </a>
              .
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#64a63a] hover:bg-[#5da033] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#64a63a]"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Enquire;
