<section class="container flex-cards page-section">
{% for merch in site.data.merch %}
    <div class="wrap flex-cards">
        <div class="card">
            <figure class="card-header">
            <img src="{{merch.image}}">
            </figure>
            <div class="card-inner">
                <h2>{{merch.title}}</h2>
                <p>{{merch.price}}</p>
                <button class="buy" id="{{merch.id}}">Buy</button>
            </div>
        </div>
</div>
{% endfor %}
</section>
