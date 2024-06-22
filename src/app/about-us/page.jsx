"use client";

function page() {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: "1rem",
  };

  const stylesh1 = {
    textAlign: "center",
  };

  return (
    <div style={{ ...style, gap: "2rem" }}>
      <div style={style}>
        <h2 style={stylesh1}>Before</h2>
        <div>
          <img
            src="https://res.cloudinary.com/freecodez/image/upload/v1719027222/images/ulfocziawqbcdvksreux.webp"
            alt="img 1"
            width="100%"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/freecodez/image/upload/v1719027236/images/bsk50v1s5mkbgenyoh2l.webp"
            alt="img 1"
            width="100%"
          />
        </div>
      </div>
      <hr />
      <div>
        <h2 style={stylesh1}>Before</h2>
        <div>
          <img
            src="https://res.cloudinary.com/freecodez/image/upload/v1719027256/images/z2bpznqkefz3rob2fshh.webp"
            alt="img 1"
            width="100%"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/freecodez/image/upload/v1719027338/images/hggqna2ovxv1wvrg5xsq.webp"
            alt="img 1"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
