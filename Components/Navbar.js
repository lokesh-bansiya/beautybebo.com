function Navbar() {

    return `
        <div>
            <div id="first_navbar_container">
                <div id="first_child">
                    <img src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg" alt="top-image" />
                </div>
                <div id="second_child">
    
                    <div id="first_section">
                        <a href="index.html"><img src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" alt="Logo" /></a>
                    </div>
    
                    <div id="middle_section">
                        <select name="" id="selectBox">
                            <option value="">All categories</option>
                            <option value="--Makeup">--Makeup</option>
                            <option value="------Face">------Face</option>
                            <option value="--------Foundation">--------Foundation</option>
                            <option value="--------Blush">--------Blush</option>
                            <option value="--------Highlighters">--------Highlighters</option>
                            <option value="--------Concealer">--------Concealer</option>
                            <option value="--------Compact & Powder">
                                --------Compact & Powder
                            </option>
                            <option value="--------Face Primer">--------Face Primer</option>
                            <option value="--------Makeup Remover">
                                --------Makeup Remover
                            </option>
                            <option value="--------Contour">--------Contour</option>
                            <option value="--------Bronzer">--------Bronzer</option>
                            <option value="--------BB Cream">--------BB Cream</option>
                            <option value="--------Loose Powder">--------Loose Powder</option>
                            <option value="--------Setting Spray">--------Setting Spray</option>
                            <option value="--------Makeup Kits">--------Makeup Kits</option>
                            <option value="--------CC Cream">--------CC Cream</option>
                            <option value="------Eye">------Eye</option>
                            <option value="--------Eye Shadow">--------Eye Shadow</option>
                            <option value="--------Eyeliner">--------Eyeliner</option>
                            <option value="--------False Eyelashes">
                                --------False Eyelashes
                            </option>
                            <option value="--------Mascara">--------Mascara</option>
                            <option value="--------Eye Makeup Remover">
                                --------Eye Makeup Remover
                            </option>
                            <option value="--------Contact Lenses">
                                --------Contact Lenses
                            </option>
                            <option value="--------Eye Primer">--------Eye Primer</option>
                            <option value="--------Eye-Palettes">--------Eye-Palettes</option>
                            <option value="--------Eye Kit">--------Eye Kit</option>
                            <option value="------Lips">------Lips</option>
                            <option value="--------Lipstick">--------Lipstick</option>
                            <option value="--------Liquid Lipstick">
                                --------Liquid Lipstick
                            </option>
                            <option value="--------Lip Liner">--------Lip Liner</option>
                            <option value="--------Lip Gloss">--------Lip Gloss</option>
                            <option value="--------Lip Balm">--------Lip Balm</option>
                            <option value="--------Lip Crayon">--------Lip Crayon</option>
                            <option value="--------Lip Plumper">--------Lip Plumper</option>
                            <option value="------Nails">------Nails</option>
                            <option value="--------Nail Polish">--------Nail Polish</option>
                            <option value="--------Manicure & Padicure Kits">
                                --------Manicure & Padicure Kits
                            </option>
                            <option value="--------Nail Care">--------Nail Care</option>
                            <option value="--------Nail Art Kits">--------Nail Art Kits</option>
                            <option value="---------Nail Polish Remover">
                                ---------Nail Polish Remover
                            </option>
                            <option value="------Tools Brushes">------Tools Brushes</option>
                            <option value="--------Face Brush">--------Face Brush</option>
                            <option value="--------Makeup Pouches">
                                --------Makeup Pouches
                            </option>
                            <option value="--------Sponges & Applicaters">
                                --------Sponges & Applicators
                            </option>
                            <option value="--------Eye Brush">--------Eye Brush</option>
                            <option value="------Blush Brush">--------Blush Brush</option>
                            <option value="--------Tweezers">--------Tweezers</option>
                            <option value="--Skin">--Skin</option>
                            <option value="------Body Care">------Body Care</option>
                            <option value="--------Body Moisturizers">
                                --------Body Moisturizers
                            </option>
                            <option value="--------Kits and Combos">
                                --------Kits and Combos
                            </option>
                            <option value="--------Body Sun Care">--------Body Sun Care</option>
                            <option value="--------Hand Creams">--------Hand Creams</option>
                            <option value="--------Body Tones">--------Body Tones</option>
                            <option value="--------Neck Creams">--------Neck Creams</option>
                            <option value="------Face Care">------Face Care</option>
                            <option value="-------Facial Kits">--------Facial Kits</option>
                            <option value="--------Face-Wash">--------FaceWash</option>
                            <option value="--------Brightening Creams">
                                --------Brightening Creams
                            </option>
                            <option value="--------Face Oil">--------Face Oil</option>
                            <option value="--------Mask  Peels">--------Mask Peels</option>
                            <option value="--------Bleach Creams">--------Bleach Creams</option>
                            <option value="--------Anti-Aging Creams">
                                --------Anti-Aging Creams
                            </option>
                            <option value="--Hair">--Hair</option>
                            <option value="------Hair Care">------Hair Care</option>
                            <option value="--------Hair Color/Dye">
                                --------Hair Color/Dye
                            </option>
                            <option value="--------Gels & Waxes">--------Gels & Waxes</option>
                            <option value="--------Hair Spray">--------Hair Spray</option>
                            <option value="--------Hairfall & Thinning">
                                --------Hairfall & Thinning
                            </option>
                            <option value="--------Dandruff">--------Dandruff</option>
                            <option value="--------Color Protection">
                                --------Color Protection
                            </option>
                        </select>
    
                        <div id="searchBox">
                            <input type="text" placeholder="search" />
                            <i class="fa fa-search"></i>
                        </div>
                    </div>
    
                    <div id="last_section">
                        <div><a href="login.html"><i class="fa fa-heart" id="icons-navbar1"></i></a></div>
                        <div><a href="sign-up.html"><i class="fa fa-user" id="icons-navbar2"></i></a></div>
                    </div>
                </div>
            </div>
    
            <div id="second_navbar_container">
                <div>
                    <div id="navbar_items">
                        <div>
                            <a href="#" class="nav_bar_section">
                                MAKEUP <i class="fa fa-chevron-down" style="font-size:100%"></i>
                            </a>
                        </div>
                    </div>
                    <div class="hide1">
                        <div class="hoverdiv">
                            <h3>FACE</h3>
                            <p>BB Cream</p>
                            <p>Blush</p>
                            <p>Bronzer</p>
                            <p>CC Cream</p>
                            <p>Contour</p>
                            <p>Concealer</p>
                            <p>Compact & Powder</p>
                            <p>Face Primer</p>
                            <p>Foundation</p>
                            <p>Highlighters</p>
                            <p>Loose Powder</p>
                            <p>Makeup Kits</p>
                            <p>Makeup Remover</p>
                            <p>Setting Spray</p>
                        </div>
                        <div class="hoverdiv">
                            <h3>FACE CARE</h3>
                            <p>Cream </p>
                            <p>Bleach Creams</p>
                            <p>Brightening Creams</p>
                            <p>Face Wash</p>
                            <p>Facial Wipes </p>
                            <p>Face Oil </p>
                            <p>Face Cleansers</p>
                            <p>Facial Kits </p>
                            <p>Face Tools </p>
                            <p>Moisturizers</p>
                            <p>Mask & Peels</p>
                            <p>Serum</p>
                            <p>Toner & Astringents</p>
                        </div>
                        <div class="hoverdiv">
                            <h3>LIPS</h3>
                            <p>Lipstick</p>
                            <p>Liquid Lipstick</p>
                            <p>Lip Liner</p>
                            <p>Lip Gloss</p>
                            <p>Lip Balm</p>
                            <p>Lip Crayon</p>
                            <p>Lip Stain</p>
                            <p>Lip Plumper</p>
                        </div>
                        <div class="hoverdiv">
                            <h3>NAILS</h3>
                            <p>Manicure & Pedicure Kits</p>
                            <p>Nail Polish</p>
                            <p>Nail Care</p>
                            <p>Nail Polish Sets</p>
                            <p>Nail Art Kits</p>
                            <p>Nail Polish Remover</p>
                        </div>
                        <div class="hoverdiv">
                            <h3>TOOLS BRUSHES</h3>
                            <p>Blush Brush</p>
                            <p>Eyelash Curlers</p>
                            <p>Eye Brush</p>
                            <p>Face Brush</p>
                            <p>Lip Brush</p>
                            <p>Makeup Pouches</p>
                            <p>Mirrors</p>
                            <p>Sponges & Applicators</p>
                            <p>Sharpeners</p>
                            <p>Tweezers</p>
                        </div>
                    </div>
                    <div class="myDIV2">
                        <a class="nav_bar_section" href="skinPage.html">SKIN <i class="fa fa-chevron-down"
                                style="font-size:100%"></i></a>
                    </div>
                    <div class="hide2">
                        <div class="hoverdiv">
                            <h3>EYE CARE</h3>
                            <p>Dark Circles</p>
                            <p>Eye Contour Care</p>
                            <p>Eye Cream</p>
                            <p>Eye Masks</p>
                            <p>Eye Serums</p>
                            <p>Puffiness</p>
                            <p>Under Eye Creams</p>
                            <p>Under Eye Wrinkles</p>
                        </div>
                        <div class="hoverdiv">
                            <h3>FACE CARE</h3>
                            <p>Anti- Ageing Creams</p>
                            <p>Bleach Creams</p>
                            <p>Brightening Cream</p>
                            <p>Face Wash</p>
                            <p>Facial Wipes</p>
                            <p>Face Oil</p>
                            <p>Face Cleansers</p>
                            <p>Facial Kits</p>
                            <p>Face Tools</p>
                            <p>Moisturizer</p>
                            <p>Mask & Peels</p>
                            <p>Serum</p>
                            <p>Toner & Astringents</p>
                        </div>
                        <div class="hoverdiv">
                            <h3>BODY CARE</h3>
                            <p>All Cream</p>
                            <p>Body Moisturizers</p>
                            <p>Body Toners</p>
                            <p>Body Sun Care</p>
                            <p>Brightening Lotion</p>
                            <p>Dark Circles & Wrinkles</p>
                            <p>Day Cream</p>
                            <p>Foot Cream</p>
                            <p>Hair Remover Cream</p>
                            <p>Hand Creams</p>
                            <p>Hands & Feet</p>
                            <p>Kits & Combos</p>
                            <p>Night Cream</p>
                            <p>Neck Creams</p>
                        </div>
                        <div class="hoverdiv">
                            <div>
                                <img src="https://www.beautybebo.com/pub/media/mega-menu/SKIN_cATA.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="myDIV3">
                        <a class="nav_bar_section" href="#">HAIR <i class="fa fa-chevron-down"
                                style="font-size:100%"></i></a>
                    </div>
                    <div class="hide3">
                        <div class="hoverdiv">
                            <h3>HAIR CARE</h3>
                            <p>Color Protection</p>
                            <p>Dandruff</p>
                            <p>Dry Shampoo</p>
                            <p>Gels & Waxes</p>
                            <p>Hair Spray</p>
                            <p>Hair Color/ Dye</p>
                            <p>Hair Creams & Masks</p>
                            <p>Hair Styling</p>
                            <p>Hairfall & Thinning</p>
                            <p>Straighteners</p>
                        </div>
                        <div class="hoverdiv">
                            <h3>HAIR LOSS</h3>
                            <p>Conditioner</p>
                            <p>Hair Oil</p>
                            <p>Hair Serum</p>
                            <p>Hair Growth Solutions</p>
                            <p>Shampoo</p>
                        </div>
                        <div class="hoverdiv">
                            <div>
                                <img src="https://www.beautybebo.com/pub/media/mega-menu/hair_cata.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="myDIV4">
                        <a class="nav_bar_section" href="#">PERSONAL CARE <i class="fa fa-chevron-down"
                                style="font-size:100%"></i></a>
                    </div>
                    <div class="hide4">
                        <div class="hoverdiv">
                            <h3>BATH & BODY</h3>
                            <p>Body Cleansers</p>
                            <p>Body Massage Oil</p>
                            <p>Body Wash</p>
                            <p>Creams</p>
                            <p>Essential Oils</p>
                            <p>Foot Cream</p>
                            <p>Scrubs & Exfoliants</p>
                            <p>Ubtan & Face Packs</p>
                        </div>
                        <div class="hoverdiv">
                            <h3>BATHING ACCESSORIES</h3>
                            <p>Bath Brushes</p>
                            <p>Loofahs</p>
                            <p>Shower Caps</p>
                            <p>Sponges</p>
                        </div>
                        <div class="hoverdiv">
                            <h3>BATH & SHOWER</h3>
                            <p>Body Soaps</p>
                            <p>Shower Gel</p>
                        </div>
                        <div class="hoverdiv">
                            <div>
                                <img src="https://www.beautybebo.com/pub/media/mega-menu/personal_cata.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="myDIV5">
                        <a class="nav_bar_section" href="#">MOM & BABY CARE <i class="fa fa-chevron-down"
                                style="font-size:100%"></i></a>
                    </div>
                    <div class="hide5">
                        <div class="hoverdiv">
                            <h3>BABY CARE</h3>
                            <p>Bath Time</p>
                            <p>Diapers</p>
                            <p>Lotions & Creams</p>
                            <p>Oils</p>
                            <p>Powder</p>
                            <p>Shampoo</p>
                            <p>Soaps</p>
                            <p>Sterilizer & Cleaners</p>
                            <p>Rash Cream</p>
                            <p>Wipes</p>
                        </div>
                        <div class="hoverdiv">
                            <h3>MOM CARE</h3>
                            <p>Lotions & Creams</p>
                            <p>Personal Care</p>
                        </div>
                        <div class="hoverdiv">
                            <div>
                                <img src="https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="myDIV6">
                        <a class="nav_bar_section" href="fragrancePage.html">FRAGRANCE <i class="fa fa-chevron-down"
                                style="font-size:100%"></i></a>
                    </div>
                    <div class="hide6">
                        <div class="hoverdiv">
                            <h3>Perfumes</h3>
                            <p>Deodorants roll ons</p>
                            <p>Body Mist/Spray</p>
                        </div>
                    </div>
                    <div class="myDIV7">
                        <a class="nav_bar_section" href="#">AYURVEDA <i class="fa fa-chevron-down"
                                style="font-size:100%"></i></a>
                    </div>
                    <div class="hide7">
                        <div class="hoverdiv">
                            <h4>NATURAL SKIN CARE</h4>
                            <p>Body Wash</p>
                            <p>Body Lotion</p>
                            <p>Cleansers</p>
                            <p>Cream</p>
                            <p>Eye Care</p>
                            <p>Face Wash</p>
                            <p>Gel</p>
                            <p>Lip Care</p>
                            <p>Mask</p>
                            <p>Pack</p>
                            <p>Scrub</p>
                            <p>Sun Protection</p>
                        </div>
                        <div class="hoverdiv">
                            <h4>NATURAL HAIR CARE</h4>
                            <p>Conditioner</p>
                            <p>Hair Oils</p>
                            <p>Hair Serum</p>
                            <p>Hair Gel</p>
                            <p>Shampoo</p>
                        </div>
                        <div class="hoverdiv">
                            <div>
                                <img src="https://www.beautybebo.com/pub/media/mega-menu/ayurveda_cata.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cart">
                    <div>
                        <i class="fa fa-shopping-bag" id="bag-icon"></i>
                        <a href="cart.html">MY CART : <span class="totalItem">0</span></a>
                    </div>
                </div>
            </div>
            <div id="brand" class="myDIV8">
                <div>
                    <a class="nav_bar_section" href="#">BRANDS <i class="fa fa-chevron-down" style="font-size:100%"></i></a>
                </div>
                <div class="hide8">
                    <div class="first_hoverdiv">
                        <div>Top Brands</div>
                        <div>View All</div>
                    </div>
                    <div class="second_hoverdiv">
                        <div>LAKME</div>
                        <div>L-OREAL-PARIS</div>
                        <div>JOY</div>
                        <div>AROMA MAGIC</div>
                        <div>LOTUS HERBALS</div>
                        <div>BIOTIQUE</div>
                        <div>VLCC</div>
                        <div>VEGA</div>
                        <div>MAYBELLINE</div>
                        <div>MAMARARTH</div>
                        <div>CHICCO</div>
                        <div>NEUTROGENA</div>
                    </div>
                </div>
            </div>
            
    
            <div id="mobileScreenSection-of-navbar">
                <div id="mobileScreenSection_firstBox">
                    <div>
                        <a href="index.html"><img src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" alt="Logo" /></a>
                    </div>
                    <div>
                       <a href="login.html"><div><i class="fa fa-heart" id="icons-navbar1_mobileSection"></i></div></a>
                       <a href="sign-up.html"><div><i class="fa fa-user" id="icons-navbar2_mobileSection"></i></div></a>
                    </div>
                </div>
            </div>



            <div id="header">
                <nav id="small_screen_container" class="mobile_screen_navbar">
                    <div>
                        <i class="fa fa-shopping-bag" id="bag-icon_small_screen"></i>
                        <a href="cart.html">MY CART : <span class="totalItem">0</span></a>
                    </div>
                    <div class="nav-menu">
                        <div class="nav-item">
                            <a href="#" class="nav-link">Makeup</a>
                        </div>
                        <div class="nav-item">
                            <a href="skinPage.html" class="nav-link">Skin</a>
                        </div>
                        <div class="nav-item">
                            <a href="#" class="nav-link">Hair</a>
                        </div>
                        <div class="nav-item">
                            <a href="#" class="nav-link">Personal-care</a>
                        </div>
                        <div class="nav-item">
                            <a href="#" class="nav-link">Baby-care</a>
                        </div>
                        <div class="nav-item">
                            <a href="fragrancePage.html" class="nav-link">Fragnance</a>
                        </div>
                        <div class="nav-item">
                            <a href="#" class="nav-link">Ayurveda</a>
                        </div>
                        <div class="nav-item">
                            <a href="#" class="nav-link">Brands</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    `;
}

export default Navbar;
