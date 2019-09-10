{% for merch in site.data.merch %}
<section class="container flex-cards page-section">
    <div class="container flex-cards">
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
</section>
{% endfor %}
