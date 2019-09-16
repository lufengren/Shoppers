const orderModalTemplate = `
<div class="order-modal d-flex justify-content-center align-items-center">
<div class="order-modal-content p-4">
                        <header class="d-flex mb-2">Edit Address
                            <span class="ml-auto">&times;</span>
                        </header>
                        <div class="form-group py-2">
                            <span class="required">*</span>
                            <label for="firstname"> First Name </label>
                            <input type="text" size="30" id="firstname" class="input-reset" value={{firstname}}>
                        </div>
                        <div class="form-group py-2">
                            <span class="required">*</span>
                            <label for="lastname"> Last Name </label>
                            <input type="text" size="30" id="lastname" class="input-reset" value={{lastname}}>
                        </div>
                        <div class="form-group py-2">
                            <span class="required">*</span>
                            <label for="phone"> Phone </label>
                            <input type="text" size="30" id="phone" class="input-reset" value={{phone}}>
                        </div>
                        <div class="form-group py-2">
                            <span class="required">*</span>
                            <label for="address">
                                Address </label>
                            <input type="text" size="30" id="address" class="input-reset" value={{address}}>
                        </div>
                        <div class="form-group py-2">
                            <span class="required">*</span>
                            <label for="city">
                                City </label>
                            <input type="text" size="30" id="city" class="input-reset" value={{city}}>
                        </div>
                        <div class="form-group py-2">
                            <span class="required">*</span>
                            <label for="state">
                                State </label>
                            <select name="state" id="state">
                                <option value="" selected="selected">-Selectstate-</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">
                                    Alaska
                                </option>
                                <option value="AZ">
                                    Arizona
                                </option>
                                <option value="AR">
                                    Arkansas
                                </option>
                                <option value="CA">
                                    California
                                </option>
                                <option value="CO">
                                    Colorado
                                </option>
                                <option value="CT">
                                    Connecticut
                                </option>
                                <option value="DE">
                                    Delaware
                                </option>
                                <option value="DC">
                                    District
                                    Of
                                    Columbia
                                </option>
                                <option value="FL">
                                    Florida
                                </option>
                                <option value="GA">
                                    Georgia
                                </option>
                                <option value="HI">
                                    Hawaii
                                </option>
                                <option value="ID">
                                    Idaho
                                </option>
                                <option value="IL">
                                    Illinois
                                </option>
                                <option value="IN">
                                    Indiana
                                </option>
                                <option value="IA">
                                    Iowa
                                </option>
                                <option value="KS">
                                    Kansas
                                </option>
                                <option value="KY">
                                    Kentucky
                                </option>
                                <option value="LA">
                                    Louisiana
                                </option>
                                <option value="ME">
                                    Maine
                                </option>
                                <option value="MD">
                                    Maryland
                                </option>
                                <option value="MA">
                                    Massachusetts
                                </option>
                                <option value="MI">
                                    Michigan
                                </option>
                                <option value="MN">
                                    Minnesota
                                </option>
                                <option value="MS">
                                    Mississippi
                                </option>
                                <option value="MO">
                                    Missouri
                                </option>
                                <option value="MT">
                                    Montana
                                </option>
                                <option value="NE">
                                    Nebraska
                                </option>
                                <option value="NV">
                                    Nevada
                                </option>
                                <option value="NH">
                                    New
                                    Hampshire
                                </option>
                                <option value="NJ">
                                    New
                                    Jersey
                                </option>
                                <option value="NM">
                                    New
                                    Mexico
                                </option>
                                <option value="NY">
                                    New
                                    York
                                </option>
                                <option value="NC">
                                    North
                                    Carolina
                                </option>
                                <option value="ND">
                                    North
                                    Dakota
                                </option>
                                <option value="OH">
                                    Ohio
                                </option>
                                <option value="OK">
                                    Oklahoma
                                </option>
                                <option value="OR">
                                    Oregon
                                </option>
                                <option value="PA">
                                    Pennsylvania
                                </option>
                                <option value="RI">
                                    Rhode
                                    Island
                                </option>
                                <option value="SC">
                                    South
                                    Carolina
                                </option>
                                <option value="SD">
                                    South
                                    Dakota
                                </option>
                                <option value="TN">
                                    Tennessee
                                </option>
                                <option value="TX">
                                    Texas
                                </option>
                                <option value="UT">
                                    Utah
                                </option>
                                <option value="VT">
                                    Vermont
                                </option>
                                <option value="VA">
                                    Virginia
                                </option>
                                <option value="WA">
                                    Washington
                                </option>
                                <option value="WV">
                                    West
                                    Virginia
                                </option>
                                <option value="WI">
                                    Wisconsin
                                </option>
                                <option value="WY">
                                    Wyoming
                                </option>
                            </select>
                        </div>
                        <div class="form-group py-2">
                            <span class="required">*</span>
                            <label>
                                Zip
                                Code
                            </label>
                            <input type="text" size="30" id="zipcode" class="input-reset" value={{zipcode}}>
                        </div>
                        <div class="text-center">
                            <button class="btn submit-address">SAVE</button>
                        </div>
                    </div></div>`;
export {
    orderModalTemplate
}