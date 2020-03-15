const puppeteer = require('puppeteer')

async function getCoursesData(account) {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  })
  const page = await browser.newPage()
  try {
    await page.goto(`https://platzi.com/@${account}`)
    const data= await page.evaluate(() => {
      function mapData(data) {
        return data.map(d => {
          return {
            id: d.id,
            title: d.title,
            logo: d.logo,
            badge: d.badge,
            diploma_link: `https://platzi.com${d.diploma_link}`
          }
        })
      }

      return data = {
        careers: mapData(window.data.careers),
        courses: [
          ...mapData(window.data.courses),
          ...mapData(window.data.deprecated)
        ]
      }
    })

    return data

  } catch (error) {
    browser.close()
    console.log(error.message)
    return {
      error: 'This account is private or does not exists. To get your courses information go to your profile configuration in Platzi and set your account as public.'
    }
  }
}

module.exports = getCoursesData;