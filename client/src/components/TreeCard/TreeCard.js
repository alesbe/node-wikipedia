import "./TreeCard.css";

export default function TreeCard({name,emoji,s_name,image,desc}) {
  return (
    <div class="card">
      <div class="img-avatar">
        <div class="emoji">{emoji}</div>
      </div>
      <div class="card-text">
        <div
          class="portada"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div class="title-total">
          <div class="title">{name}</div>
          <h2>{s_name}</h2>

          <div class="desc">{desc}</div>
        </div>
      </div>
    </div>
  );
}
