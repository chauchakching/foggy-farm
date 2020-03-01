import contentFarmDomains from './contentFarmList.json'

document.querySelectorAll('.g').forEach(r => {
  const isContentFarmResult = contentFarmDomains.some(
    bannedDomain => r.querySelector('a').href.includes(bannedDomain)
  )
  if (isContentFarmResult) {
    r.style.transition = 'all 0.2s ease 0.2s'
    r.style.opacity = 0.05
  }
})