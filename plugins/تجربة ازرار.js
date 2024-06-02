let handler = async (m, { conn, args, usedPrefix, command }) => {
const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
const time = moment.tz('Africa/Egypt').format('HH')
let wib = moment.tz('Africa/Cairo').format('HH:mm:ss')
let date = new Date().toLocaleDateString('en-EG', { day: 'numeric', month: 'long', year: 'numeric' }); 
await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } })

   
  conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ⌊ ${m.pushName} ⌉*
── • ◈ • ──

┏━━🤖 *『』ī معلومات البوت ī《* 🤖━━┓
┃ ✨  *اسـم البـوت: 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕*
┃ 💻  *المـنصـة:* 𝑯𝑬𝑹𝑶𝑲𝑼💀 
┃ 📍  *رقم المطور: 201508628077*
┃ 📚  *اسم المطور: 『➳ᴹᴿ᭄𝒁𝒆𝒛𝒐➳ᴹᴿ᭄』* 
┗━━━━━━━━━━━━━┛

┏━━⏰ *『』التاريخ والوقت《* ⏰━┓
┃ 📆  *تـاريـخ اليـوم:* 『』${date}《 
┃ ⏲️  *الـوقـت الـحالـي:* 『』${wib}《 
┗━━━━━━━━━━━━━┛
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢`
            },
            body: {
              text: '> اذا واجهتك مشكله اكتب ابلاغ واكتب رسالتك\n> ➳ᴹᴿ᭄𝒁𝒆𝒛𝒐➳ᴹᴿ᭄'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: '『』CLICK《',
                    sections: [
                      {
                        title: '『』MENUS《',
                        highlight_label: 'OWNER', 
                        rows: [
                          {
                            header: 'info',
                            title: '⌬ ❛╏المطور',
                            description: '',
                            id: '.المطور'
                          },
                           {
                                header: '『』MENU《', 
                                title:'⌬ ❛╏التنزيلات', 
                                description: '', 
                                id: '.4', 
                         }, 
                            {
                                header: '『』MENU《', 
                                title: '⌬ ❛╏قائمه الجروب', 
                                description: '', 
                                id: '.5', 
                         }, 
                            {
                                header: '『』MENU《', 
                                title: '⌬ ❛╏الالعاب', 
                                description: '', 
                                id: '.6', 
                         }, 
                            
                            {
                                header: '『』MENU《', 
                                title: '⌬ ❛╏الترفيه', 
                                description: '', 
                                id: '.6', 
                         }, 
                           
                            {
                                header: '『』MENU《', 
                                title: '⌬ ❛╏الصور', 
                                description: '', 
                                id: '.2', 
                         }, 

                           
                            {
                                header: '『』MENU《', 
                                title: '⌬ ❛╏شروط', 
                                description: '', 
                                id: '.20', 
                         }, 


                            {
                                header: '『』MENU《', 
                                title: '⌬ ❛╏الدعم', 
                                description: '', 
                                id: '.الدعم', 
                         }, 

                            
                            {
                                header: '『』All MENU《', 
                                title: '⌬ ❛╏قائمة الاوامر', 
                                description: '', 
                                id: '.10', 
                         }, 
                        ]
                      }
                    ]
                  }),
                  messageParamsJson:'ZEZO bot'
                }, 
                {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"『』جروب الدعم《","url":"https://chat.whatsapp.com/JO7neq006uI3OgEtjNvtm0","merchant_url":"https://chat.whatsapp.com/JO7neq006uI3OgEtjNvtm0"}'
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['لول']

export default handler
