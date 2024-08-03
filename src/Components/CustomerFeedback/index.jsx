import React from 'react';
import './CustomerFeedback.css';

function CustomerFeedback() {


  return (
<>
<div class="customer-feedback">
    <h3>Customer's Feedback</h3>
    <div class="feedback">
        <div class="feedback-item">
            <p class="name">Jenny Wilson</p>
            <div class="stars">
                ★★★★★
            </div>
            <p class="comment">
                The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.
            </p>
        </div>

        <div class="feedback-item">
            <p class="name">Dianne Russell</p>
            <div class="stars">
                ★★★★★
            </div>
            <p class="comment">
                We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.
            </p>
        </div>

        <div class="feedback-item">
            <p class="name">Devon Lane</p>
            <div class="stars">
                ★★★★★
            </div>
            <p class="comment">
                Normally wings are wings, but theirs are lean meaty and tender, and the service is outstanding.
            </p>
        </div>
    </div>
</div>

</>
  );
}

export default CustomerFeedback;
