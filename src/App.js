import logo from './logo.svg';
import cake from './../src/Cake-icon.png'
import './App.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div className="card" style={{ width: "35rem" }}>
        <div className="card-body">
          <div className='d-flex'>
          <h5 className="text-start fw-bold">ROI Calculator</h5>
          <span className='ms-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          </span>
          </div>
          <div className="d-flex ">
            <div className='ms-auto'>
              <img className='img' src={cake} ></img>
              <span className="text-secondary fs-6 fw-bold m-0">CAKE</span>
              <BootstrapSwitchButton
                checked={true}
                onstyle='warning'
                offstyle='light'
                offlabel=' '
                onlabel=' '
                style='mx-3 mb-1'
              />
              <span className="text-secondary fs-6 fw-bold">USD</span>
            </div>
          </div>
          <div className="mb-1">
            <input type="text" value={"0.000 USD"} className="form-control fs-5 fw-bold text-end" />
          </div>
          <div className="mb-3 d-flex">
            <button type="button" class="btn btn-light btn-sm mx-1 px-4 fw-bold">$1000</button>
            <button type="button" class="btn btn-light btn-sm mx-1 px-4 fw-bold">$100</button>
            <span className="ms-auto text-secondary fw-bold small-font">~ CAKE 0.000</span>
          </div>
          <div className="mb-3">
            <h6 className="text-start  fw-bold">Timeframe</h6>
            <div className="d-flex justify-content-between">
              <button type="button" class="btn-custom btn btn-light btn-sm mx-2 px-4 rounded-button text-secondary fw-bold">1 Day</button>
              <button type="button" class="btn-custom btn btn-light btn-sm mx-1 px-4 rounded-button text-secondary fw-bold">7 Days</button>
              <button type="button" class="btn-custom btn btn-light btn-sm mx-1 px-4 rounded-button text-secondary fw-bold">30 Days</button>
              <button type="button" class="btn-custom btn btn-light btn-sm mx-1 px-4 rounded-button text-secondary fw-bold">1 Year</button>
              <button type="button" class="btn-custom btn btn-light btn-sm mx-1 px-4 rounded-button text-secondary fw-bold">5 Year</button>
            </div>
          </div>
          <div className="mb-3">
            <div className='d-flex'>
              <h6 className="text-start  fw-bold ">Enable Accelerated APY</h6>
              <div className='ms-auto'>
                <BootstrapSwitchButton
                  checked={true}
                  onstyle='warning'
                  offstyle='light'
                  offlabel=' '
                  onlabel=' '
                  style='mx-3 '
                />
              </div>
            </div>
            <p className="text-start text-secondary fs-6  fw-bold ">Select Tier</p>
            <div className="d-flex justify-content-between">
              <button type="button" class="btn-custom btn btn-light btn-sm mx-2 px-4 rounded-button text-secondary fw-bold">Tier 1</button>
              <button type="button" class="btn-custom btn btn-light btn-sm mx-1 px-4 rounded-button text-secondary fw-bold">Tier 7</button>
              <button type="button" class="btn-custom btn btn-light btn-sm mx-1 px-4 rounded-button text-secondary fw-bold">Tier 3</button>
              <button type="button" class="btn-custom btn btn-light btn-sm mx-1 px-4 rounded-button text-secondary fw-bold">Tier 4</button>
              <button type="button" class="btn-custom btn btn-light btn-sm mx-1 px-4 rounded-button text-secondary fw-bold">Tier 5</button>
            </div>
          </div>
          <div className="mb-3">
            <p className="text-end text-secondary small-font fw-bold">ROI at Current Rates</p>
            <input type="text" value={"0.00 USD"} className="form-control fs-5 fw-bold text-end" />
            <p className="text-end text-secondary x-small-font fw-bold">~0.000 CAKE + 0.000000 DON</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
