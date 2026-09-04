function Newsletter() {
  return (
    <>
      <section id="newsletter">
         <div class="nlbg"></div>
         <div class="container">
            <div class="nlw text-center" data-aos="zoom-in">
              <span
  className="slbl"
  style={{ color: "rgba(255,255,255,.7)" }}
>
  Stay Connected
</span>

<h2
  className="mb-3"
  style={{ color: "#fff" }}
>
  Subscribe &amp; Get Exclusive{" "}
  <span style={{ color: "var(--secondary)" }}>
    Deals
  </span>
</h2>

<p
  className="mb-4"
  style={{ color: "rgba(255,255,255,.78)" }}
>
  Get 15% off your first order plus early access to new menu items
</p>
               <div class="nl-form-wrap">
                  <input class="nlinput" type="email" id="nlEmail" placeholder="Enter your email address..."/>
                  <button class="nlbtn" id="nlBtn"><i class="fas fa-paper-plane me-1"></i>Subscribe</button>
               </div>
              <p
  style={{
    color: "rgba(255,255,255,.45)",
    fontSize: ".76rem",
    marginTop: "11px",
  }}
>
  <i className="fas fa-lock me-1"></i>
  No spam, unsubscribe anytime.
</p>
            </div>
         </div>
      </section>
    </>
  );
}

export default Newsletter;
