import type { NextPage } from 'next'
import Image from 'next/image'
import { AdminLayout } from '@layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faArrowUp,
  faDownload,
  faEllipsisVertical,
  faMars,
  faSearch,
  faUsers,
  faVenus,
} from '@fortawesome/free-solid-svg-icons'
import {
  Button, ButtonGroup, Card, Dropdown, ProgressBar,
} from 'react-bootstrap'
import { Bar, Line } from 'react-chartjs-2'
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import {
  faCcAmex,
  faCcApplePay,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const Home: NextPage = () => (
  <AdminLayout>
    <div className="row">
    <h1 className='text-black text-3xl mb-5'>Mentee's of the months</h1>
      <div className="col-sm-6 col-lg-3">
      
        <Card bg="primary" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">

            <div>
              
              <div className="fs-4 fw-semibold">
                
                <span className="fs-6 ms-2 fw-normal">
                  (+92.4%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
              <div>Anjali</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart1"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <div className="mt-3 mx-3" style={{ height: '70px' }}>
            <Line
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [65, 59, 84, 84, 51, 55, 40],
                }],
              }}
            />
          </div>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-3">
        <Card bg="info" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-4 fw-semibold">
              
                <span className="fs-6 ms-2 fw-normal">
                  (40.9%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
              <div>Mena</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart2"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <div className="mt-3 mx-3" style={{ height: '70px' }}>
            <Line
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: -9,
                    max: 39,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [1, 18, 9, 17, 34, 22, 11],
                }],
              }}
            />
          </div>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-3">
        <Card bg="warning" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-4 fw-semibold">
               
                <span className="fs-6 ms-2 fw-normal">
                  (84.7%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
              <div>Komal</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart3"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <div className="mt-3 mx-3" style={{ height: '70px' }}>
            <Line
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,255,255,.2)',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [78, 81, 80, 45, 34, 12, 40],
                  fill: true,
                }],
              }}
            />
          </div>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-3">
        <Card bg="danger" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-4 fw-semibold">
              
                <span className="fs-6 ms-2 fw-normal">
                  (+23.6%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
              <div>Mansi</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart4"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <div className="mt-3 mx-3" style={{ height: '70px' }}>
            <Bar
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
                datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,255,255,.2)',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                  barPercentage: 0.6,
                }],
              }}
            />
          </div>
        </Card>
      </div>
    </div>

    <Card className="mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="mb-0">Analytics </h4>
            <div className="small text-black-50">January - July 2021</div>
          </div>
          <div className="d-none d-md-block">
            <ButtonGroup aria-label="Toolbar with buttons" className="mx-3">
              <input
                className="btn-check"
                id="option1"
                type="radio"
                name="options"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="option1">Day</label>
              <input
                className="btn-check"
                id="option2"
                type="radio"
                name="options"
                autoComplete="off"
                defaultChecked
              />
              <label
                className="btn btn-outline-secondary active"
                htmlFor="option2"
              >
                Month
              </label>
              <input
                className="btn-check"
                id="option3"
                type="radio"
                name="options"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="option3">Year</label>
            </ButtonGroup>
            <Button variant="primary">
              <FontAwesomeIcon icon={faDownload} fixedWidth />
            </Button>
          </div>
        </div>
        <div
          style={{
            height: '300px',
            marginTop: '40px',
          }}
        >
          <Line
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: 'rgba(13, 202, 240, 1)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                ],
                fill: true,
              }, {
                label: 'My Second dataset',
                borderColor: 'rgba(25, 135, 84, 1)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                ],
              }, {
                label: 'My Third dataset',
                borderColor: 'rgba(220, 53, 69, 1)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5],
                data: [65, 65, 65, 65, 65, 65, 65],
              }],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  beginAtZero: true,
                  max: 250,
                  ticks: {
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="row row-cols-1 row-cols-md-5 text-center">
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Course 1</div>
            <div className="fw-semibold">29.703 Users (40%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="success"
              now={40}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Course 2</div>
            <div className="fw-semibold">24.093 Users (20%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="info"
              now={20}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Course 3</div>
            <div className="fw-semibold">78.706 (60%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="warning"
              now={60}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Course 4</div>
            <div className="fw-semibold">22.123(80%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="danger"
              now={80}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Course 5</div>
            <div className="fw-semibold">40.125(50%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="primary"
              now={40}
            />
          </div>
        </div>
      </Card.Footer>
    </Card>

  
    <div className="row">
      <div className="col-md-12">
        <Card>
          <Card.Header>
            Traffic &amp; Performance
          </Card.Header>
          <Card.Body>
            <div className="row">
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-6">
                    <div className="border-start border-4 border-info px-3 mb-3">
                      <small className="text-black-50">
                        New Mentee's
                      </small>
                      <div className="fs-5 fw-semibold">9,123</div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="border-start border-4 border-danger px-3 mb-3">
                      <small className="text-black-50">
                        New Mentor's
                      </small>
                      <div className="fs-5 fw-semibold">22,643</div>
                    </div>
                  </div>

                </div>

                <hr className="mt-0" />

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Monday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={34}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={78}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Tuesday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={56}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={94}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Wednesday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={12}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={67}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Thursday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={43}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={91}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Friday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={22}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={73}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Saturday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={53}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={82}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Sunday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={9}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={69}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="row">
                  <div className="col-6">
                    <div className="border-start border-4 border-warning px-3 mb-3">
                      <small className="text-black-50">
                        Total course's
                      </small>
                      <div className="fs-5 fw-semibold">78,623</div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="border-start border-4 border-success px-3 mb-3">
                      <small className="text-black-50">
                        Ongoing course's
                      </small>
                      <div className="fs-5 fw-semibold">49,123</div>
                    </div>
                  </div>

                </div>

                <hr className="mt-0" />

                <div className="mb-5">
                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        <FontAwesomeIcon className="me-2" icon={faVenus} fixedWidth />
                        Empowered Females
                      </div>
                      <div className="ms-auto fw-semibold">93%</div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="warning"
                      now={93}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        <FontAwesomeIcon className="me-2" icon={faVenus} fixedWidth />
                        Udaan aspirant's
                      </div>
                      <div className="ms-auto fw-semibold">7%</div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="warning"
                      now={7}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex mb-1">
                    <div>
                      Udaan
                    </div>
                    <div className="ms-auto fw-semibold me-2">11,912</div>
                    <div className="text-black-50 small">(56%)</div>
                  </div>
                  <ProgressBar
                    className="progress-thin"
                    variant="success"
                    now={25}
                  />
                </div>

                <div className="mb-3">
                  <div className="d-flex mb-1">
                    <div>
                      Shiksha
                    </div>
                    <div className="ms-auto fw-semibold me-2">51,223</div>
                    <div className="text-black-50 small">(15%)</div>
                  </div>
                  <ProgressBar
                    className="progress-thin"
                    variant="success"
                    now={35}
                  />
                </div>

                <div className="mb-3">
                  <div className="d-flex mb-1">
                    <div>
                      Vridhi
                    </div>
                    <div className="ms-auto fw-semibold me-2">37,564</div>
                    <div className="text-black-50 small">(11%)</div>
                  </div>
                  <ProgressBar
                    className="progress-thin"
                    variant="success"
                    now={30}
                  />
                </div>

                <div className="mb-3">
                  <div className="d-flex mb-1">
                    <div>
                      Empower
                    </div>
                    <div className="ms-auto fw-semibold me-2">1,27,319</div>
                    <div className="text-black-50 small">(88%)</div>
                  </div>
                  <ProgressBar
                    className="progress-thin"
                    variant="success"
                    now={88}
                  />
                </div>
              </div>
            </div>

            <br />

          </Card.Body>
        </Card>
      </div>
    </div>
  </AdminLayout>
)

export default Home
