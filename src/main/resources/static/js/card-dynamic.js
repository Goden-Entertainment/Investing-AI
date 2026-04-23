const companies = [
  {
    ticker: "NVDA",
    name: "NVIDIA Corporation",
    sector: "Semiconductors",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=nvidia.com",
    description: "Designs GPUs powering gaming, data centers, and AI. A dominant force behind the global AI infrastructure buildout."
  },
  {
    ticker: "MSFT",
    name: "Microsoft Corporation",
    sector: "Software",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=microsoft.com",
    description: "Global leader in cloud computing (Azure), productivity software (Office 365), and enterprise services."
  },
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    sector: "Consumer Electronics",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=apple.com",
    description: "Designs and sells iPhones, Macs, and wearables alongside a rapidly growing services segment."
  },
  {
    ticker: "GOOGL",
    name: "Google LLC",
    sector: "Internet Services",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=google.com",
    description: "World's dominant search engine and digital advertising platform, with major cloud and AI divisions."
  },
  {
    ticker: "META",
    name: "Meta Platforms Inc.",
    sector: "Social Media",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=meta.com",
    description: "Operates Facebook, Instagram, and WhatsApp. Investing heavily in AI and the metaverse (Reality Labs)."
  },
  {
    ticker: "YHOO",
    name: "Yahoo Inc.",
    sector: "Internet Services",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=yahoo.com",
    description: "Digital media company offering news, finance, sports, and email services to a global audience."
  },
  {
    ticker: "AVGO",
    name: "Broadcom Inc.",
    sector: "Semiconductors",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=broadcom.com",
    description: "Designs and supplies semiconductor chips and infrastructure software for networking and enterprise markets."
  },
  {
    ticker: "NFLX",
    name: "Netflix Inc.",
    sector: "Streaming",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=netflix.com",
    description: "World's largest streaming platform with 260M+ paid subscribers and growing ad-supported tier."
  },
  {
    ticker: "AMZN",
    name: "Amazon.com Inc.",
    sector: "E-Commerce & Cloud",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=amazon.com",
    description: "Global e-commerce giant and cloud market leader through AWS, plus advertising and logistics arms."
  },
  {
    ticker: "TSLA",
    name: "Tesla Inc.",
    sector: "Electric Vehicles",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=tesla.com",
    description: "Manufactures electric vehicles and energy products. Also pursuing autonomous driving and robotics."
  },
  {
    ticker: "ADBE",
    name: "Adobe Inc.",
    sector: "Software",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=adobe.com",
    description: "Leading provider of creative (Photoshop, Illustrator), document (Acrobat), and digital experience software."
  },
  {
    ticker: "GOOGL",
    name: "Alphabet Inc. Class A",
    sector: "Internet Services",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=abc.xyz",
    description: "Parent company of Google and YouTube. Class A shares carry standard voting rights."
  },
  {
    ticker: "TEAM",
    name: "Atlassian Corporation",
    sector: "Software",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=atlassian.com",
    description: "Develops team collaboration tools including Jira, Confluence, and Trello used by millions of developers."
  },
  {
    ticker: "PLTR",
    name: "Palantir Technologies Inc.",
    sector: "Data Analytics",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=palantir.com",
    description: "Builds AI-driven data analytics platforms for government intelligence and commercial enterprise clients."
  },
  {
    ticker: "INTC",
    name: "Intel Corporation",
    sector: "Semiconductors",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=intel.com",
    description: "One of the world's largest semiconductor manufacturers, focused on CPUs and regaining chip fabrication leadership."
  }
];

function renderCard(company) {
  const container = document.getElementById('card-container');
  const card = document.createElement('div');
  card.classList.add('card', 'shadow-sm');
  card.style.width = '15rem';

  card.innerHTML = `
    <div class="card-body d-flex flex-column align-items-center text-center pt-4">
      <img
        src="${company.logo}"
        onerror="this.src='yadi.png'"
        class="mb-3 rounded"
        style="width:64px;height:64px;object-fit:contain;"
        alt="${company.name} logo"
      >
      <h4 class="card-title fw-bold mb-0">${company.ticker}</h4>
      <p class="text-muted small mb-2">${company.name}</p>
      <span class="badge bg-secondary mb-3">${company.sector}</span>
      <p class="card-text small text-start flex-grow-1">${company.description}</p>
      <button type="button" class="btn btn-primary btn-sm mt-3 w-100">Ask AI</button>
    </div>
  `;

  card.querySelector('button').addEventListener('click', () => showToast(company));
  container.appendChild(card);
}

function showToast(company) {
  document.getElementById('toast-title').textContent = `${company.ticker} — ${company.name}`;
  document.getElementById('toast-body').textContent = company.description;
  document.querySelector('#liveToast .toast-header img').src = company.logo;

  const toastEl = document.getElementById('liveToast');
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}

companies.forEach(renderCard);
