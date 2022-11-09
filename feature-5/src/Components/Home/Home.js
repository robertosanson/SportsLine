export default function Home() {
    return (
      <section>
        <h2> SportsLine </h2>
        <p>
          We Sell Sports Goods from all over the world
          <br />
          If you want to see what we sell go to the Inventory page in the
          Navigation Bar
          <br />
          If you want to learn more about us go to the About page in the
          Navigation Bar
        </p>
        <div>
          <img
            className="images"
            src={window.location.origin + "/pictures/logos/sportsline.jpeg"}
            alt="sportsline"
            width="1000"
          />
          {/* Added the image "Logo" of the web page */}
        </div>
      </section>
    );
  }
  
  // This page is the home page of the web page.
  