import re
import random

def replace_item(match):
    name = match.group(1).strip()
    price = random.randint(200, 2000)
    old_price = price + random.randint(50, 300)
    reviews = random.randint(50, 3000)
    
    # Pick a random unsplash farm/agriculture image
    images = [
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80"
    ]
    img = random.choice(images)
    
    return f"""<div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('{img}')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">{name}</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>({reviews})</span></div>
                                <div class="amz-price">₹{price} <small>₹{old_price}</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>"""

with open('e:/sugu project/project/app.js', 'r', encoding='utf-8') as f:
    content = f.read()

new_content = re.sub(r'<div class="prod-sub-item"><i class="fas fa-circle-dot"></i>(.*?)</div>', replace_item, content)

with open('e:/sugu project/project/app.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Updated app.js")
