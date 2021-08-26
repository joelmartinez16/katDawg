import React from 'react';
import '../App.css'

const item = () => {
    return <>

<div class="modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Pet Essentials Box</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div class="modal-body">
        <img></img>
            <p>A box full of pet essentials for first time adoptees, includes a bed, pet food, toys, and much more.</p>
      </div>
      <div class="modal-footer">
          <p>$200</p>
        <button type="button" class="btn btn-primary">Add To Cart</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close/button>
      </div>
    </div>
  </div>
</div>

<div class="modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Dog Bed</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div class="modal-body">
        <img></img>
            <p>A plush dog bed</p>
      </div>
      <div class="modal-footer">
          <p>$25</p>
        <button type="button" class="btn btn-primary">Add To Cart</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close/button>
      </div>
    </div>
  </div>
</div>

<div class="modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Signature Variety Pack Dog Food/h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div class="modal-body">
        <img></img>
            <p>Adult Dog Food 3 Flavors, 4 Pouches each</p>
      </div>
      <div class="modal-footer">
          <p>$30</p>
        <button type="button" class="btn btn-primary">Add To Cart</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close/button>
      </div>
    </div>
  </div>
</div>


</>
}
export default item;