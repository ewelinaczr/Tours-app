import styles from "./GeneralInfo.module.scss";

const GeneralInfo = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.description} id="general">
        <span>Phuket</span> is Thailand’s largest island and is the size of
        Singapore, 48 km long and 21 km at the widest part. Phuket lies in the
        Andaman Sea on Thailand’s Indian Ocean coast located 867 kilometers
        south of Bangkok. Phuket is blessed with{" "}
        <span>
          magnificent coves and bays, palm-filled, white beaches, small
          surrounding islands, hospitable people and great seafood
        </span>
        . Also delightful Chinese-Portuguese architecture, numerous sporting and
        leisure opportunities, a lush tropical landscape – which helps to create
        a nice atmosphere for a truly memorable Thailand trip. The most famous
        beaches are Patong, Kata, Karon, Kamala and Nai Harn Beach. Phuket
        islands are ideal for <span>sailing, diving, snorkeling, golfing</span>{" "}
        and all kinds of sports and entertainment you could wish for. You can
        also take a trip with a submarine to discover the colorful marine life
        below the surface. There are plenty of accommodations, ranging from
        standard bungalows to 5-star hotels. Phuket’s former wealth derived from
        tin and rubber, and enjoyed a rich and colorful history. The island was
        one of the main trade routes between India and China, and is frequently
        mentioned in foreign ship company logos. It is a very attractive island
        for sightseeing, with{" "}
        <span>beautiful beaches and wooded hillsides</span>. Phuket is very
        popular as a tourist destination and most of the beaches on the west
        coast of Phuket town in the southeast and the airport in the north.
      </div>
    </div>
  );
};

export default GeneralInfo;
