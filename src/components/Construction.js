import ConstructionProjectCard from "./ContructionProjectCard";

const Contruction = () => (
  <section id="constructions" className="constructions">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Constructions</h2>
        <p>
          Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro
          nihil id ratione ea sunt quis dolorem dolore earum
        </p>
      </div>

      <div className="row gy-4">
        <ConstructionProjectCard
          imageLink="assets/img/constructions-1.jpg"
          title="this is my first project"
          description="Sunt deserunt maiores voluptatem autem est rerum perferendis
            rerum blanditiis. Est laboriosam qui iste numquam laboriosam
            voluptatem architecto. Est laudantium sunt at quas aut hic.
            Eum dignissimos."
        />
        <ConstructionProjectCard
          imageLink="assets/img/constructions-2.jpg"
          title="this is my second project"
          description="Sunt deserunt maiores voluptatem autem est rerum perferendis
            rerum blanditiis. Est laboriosam qui iste numquam laboriosam
            voluptatem architecto. Est laudantium sunt at quas aut hic.
            Eum dignissimos."
        />
        <ConstructionProjectCard
          imageLink="assets/img/constructions-3.jpg"
          title="this is my third project"
          description="SSunt deserunt maiores voluptatem autem est rerum perferendis
            rerum blanditiis. Est laboriosam qui iste numquam laboriosam
            voluptatem architecto. Est laudantium sunt at quas aut hic.
            Eum dignissimos."
        />
        <ConstructionProjectCard
          imageLink="assets/img/constructions-4.jpg"
          title="this is my fourth project"
          description="Sunt deserunt maiores voluptatem autem est rerum perferendis
            rerum blanditiis. Est laboriosam qui iste numquam laboriosam
            voluptatem architecto. Est laudantium sunt at quas aut hic.
            Eum dignissimos."
        />
      </div>
    </div>
  </section>
);
export default Contruction;
