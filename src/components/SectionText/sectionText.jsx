import "./sectionText.css";

function sectionText() {
  return (
    <div className="box">
      <section class="main-text">
        <h2 id="Aboutme">About me</h2>
        <div className="box2">
          <p>
            Hi everyone! My name is Federica Schillaci, I'm 23 years old and I
            was born and live in Palermo (Sicily).<br></br>
            I'm a quite,sunny and a little shy girl that loves making new
            friends, go out and learn new things!<br></br>
            Immediately after high school, I did my first work experiences in
            the world of retail where I improved my skills (in particulary) in
            the customers contact.
            <br></br>During my experiences, in March 2020, in Italy they closed
            the activities due to COVID for 3 months.. and here I known,
            studied, played as a pastime for the first time HTML/CSS; after that
            period, I continued to do my work even if with my curiosity to learn
            more about it.
            <br></br>Today I decided to follow a course of study thanks to
            <a className="linktext" href="https://edgemony.com/">
              Edgemony
            </a>{" "}
            that allows me to learn programming languages to be a day a web
            developer.
          </p>
          <h3>Work history</h3>
          <div className="text-work">
            <div className="box-title">
              <h4>SALES ASSISTANT</h4>
              <h5>May 2021 - October 2021</h5>
            </div>
            <p>
              Sales Assistant at the store "CROFF" (OVS s.p.a.) in a street of
              Palermo.<br></br>
              My duties were: Assisting customers during their choice of
              products to buy; arrangement and replacement of goods, shop and
              cashier management.<br></br>
              During this experience, since I learned fast, I worked in three
              other locations due to need of staff e.g Upim, improving myself.
              <br></br>
              The same agency offered some training courses about our security
              at work, fire prevention (low risk) and the new European
              legislation on privacy.
            </p>
          </div>
          <div className="text-work">
            <div className="box-title">
              <h4>TOUR GUIDE</h4>
              <h5>September 2016 - September 2018</h5>
            </div>
            <p>
              Tour guide in the most interesting tourist attractions of Palermo.
              <br></br>
              Particularly in October 2016, I had joined at the Festival "Le Vie
              dei Tesori" as a tour guide assistant, this has allowed me to
              improve in my communication skills and understanding of customers
              in general, leading to a general growth in different work fields.
            </p>
          </div>
          <h3>Education</h3>
          <p>
            I graduated in 2018 from the Technical and Economic Institute for
            Tourism.
          </p>
          <h3>Interest</h3>
          <p>
            I love animals, nature, the sea, traveling, keeping fit by
            practicing some sports.
          </p>
        </div>
      </section>
    </div>
  );
}

export default sectionText;
