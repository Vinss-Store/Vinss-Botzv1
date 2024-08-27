process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

/*
	* Create By vinss
	* Follow https://github.com/nazedev
	* Whatsapp : wa.me/6282113821188
*/

require('./settings');
const fs = require('fs');
const os = require('os');
const util = require('util');
const gis = require('g-i-s');
const jimp = require('jimp');
const path = require('path');
const https = require('https');
const fse = require('fs-extra');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const cron = require('node-cron');
const cheerio = require('cheerio');
const request = require('request');
const maker = require('mumaker');
const fetch = require('node-fetch');
const googleIt = require('google-it');
const FileType = require('file-type');
const { JSDOM } = require('jsdom');
const agent = require('superagent');
const similarity = require('similarity');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const nodemailer = require('nodemailer');
const speed = require('performance-now');
const didYouMean = require('didyoumean');
const { performance } = require('perf_hooks');
const moment = require('moment-timezone');
const Carbon = require('unofficial-carbon-now');
const translate = require('translate-google-api');
const imageToBase64 = require('image-to-base64');
const { exec, spawn, execSync } = require('child_process');
const { Primbon } = require('scrape-primbon');
const primbon = new Primbon();
const PDFDocument = require('pdfkit');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');

const prem = require('./src/premium');
const { LoadDataBase } = require('./src/message');
const { TelegraPh, UguuSe } = require('./lib/uploader');
const { toAudio, toPTT, toVideo } = require('./lib/converter');
const { imageToWebp, videoToWebp, writeExif } = require('./lib/exif');
const { chatGpt, tiktokDl, facebookDl, instaDl, instaDownload, instaStory, ytMp4, ytMp3, allDl, Ytdl, cekKhodam } = require('./lib/screaper');
const { rdGame, iGame, tGame, gameSlot, gameCasinoSolo, gameMerampok, gameBegal, daily, buy, setLimit, addLimit, addUang, setUang, transfer } = require('./lib/game');
const { pinterest, pinterest2, wallpaper, wikimedia, quotesAnime, happymod, umma, ringtone, jadwalsholat, styletext } = require('./lib/scraper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, getAllHTML } = require('./lib/function');

// Read Database
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));

// Database Game
let suit = db.game.suit = []
let menfes = db.game.menfes = []
let tekateki = db.game.tekateki = []
let tictactoe = db.game.tictactoe = []
let tebaklirik = db.game.tebaklirik = []
let kuismath = db.game.kuismath = []
let tebaklagu = db.game.tebaklagu = []
let tebakkata = db.game.tebakkata = []
let family100 = db.game.family100 = []
let susunkata = db.game.susunkata = []
let tebakbom = db.game.tebakbom = []
let tebakkimia = db.game.tebakkimia = []
let caklontong = db.game.caklontong = []
let tebaknegara = db.game.tebaknegara = []
let tebakgambar = db.game.tebakgambar = []
let tebakbendera = db.game.tebakbendera = []

module.exports = naze = async (naze, m, chatUpdate, store) => {
	try {
		
		await LoadDataBase(naze, m);
		
		const botNumber = await naze.decodeJid(naze.user.id)
		const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
		const budy = (typeof m.text == 'string' ? m.text : '')
		const prefix = db.set[botNumber].multiprefix ? '' : /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : '.'
		const isCmd = body.startsWith(prefix)
		const args = body.trim().split(/ +/).slice(1)
		const getQuoted = (m.quoted || m)
		const isCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
		const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const text = q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
		const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
		const jam = moment().tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
		const ucapanWaktu = jam < '05:00:00' ? 'Selamat Pagi 🌉' : jam < '11:00:00' ? 'Selamat Pagi 🌄' : jam < '15:00:00' ? 'Selamat Siang 🏙' : jam < '18:00:00' ? 'Selamat Sore 🌅' : jam < '19:00:00' ? 'Selamat Sore 🌃' : jam < '23:59:00' ? 'Selamat Malam 🌌' : 'Selamat Malam 🌌';
		const almost = 0.72
		const time = Date.now()
		const setv = pickRandom(listv)
		
		const isVip = db.users[m.sender] ? db.users[m.sender].vip : false
		const isPremium = isCreator || prem.checkPremiumUser(m.sender, premium) || false
		const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false
		
		// Fake
		const fkontak = {
			key: {
				remoteJid: '0@s.whatsapp.net',
				participant: '0@s.whatsapp.net',
				fromMe: false,
				id: 'vinss'
			},
			message: {
				contactMessage: {
					displayName: (m.pushName || author),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName || author},;;;\nFN:${m.pushName || author}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					sendEphemeral: true
				}
			}
		}
		
		// Reset Limit
		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(db.users)
			for (let jid of user) {
				const limitUser = db.users[jid].vip ? limit.vip : prem.checkPremiumUser(jid, premium) ? limit.premium : limit.free
				db.users[jid].limit = limitUser
				console.log('Reseted Limit')
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Jakarta'
		})
		
		// Jadwal Shalat
		naze.autoshalat = naze.autoshalat ? naze.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? naze.user.id : m.sender
	let id = m.chat 
    if(id in naze.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    raffx: '11:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timezone: 'Asia/Jakarta'
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak ${m.pushName ? m.pushName : 'Tanpa Nama'},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Makassar dan sekitarnya._`
    naze.autoshalat[id] = [
    m.reply(caption),
    setTimeout(async () => {
    delete naze.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }
    
    async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}
		
		// Auto Set Bio
		if (db.set[botNumber].autobio) {
			let setbio = db.set[botNumber]
			if (new Date() * 1 - setbio.status > 60000) {
				await naze.updateProfileStatus(`${naze.user.name} | 🎯 Runtime : ${runtime(process.uptime())}`)
				setbio.status = new Date() * 1
			}
		}
		
		if (!naze.public) {
			if (!m.key.fromMe) return
		}
		
		// Auto Read
		if (m.message) {
			console.log(chalk.black.bgWhite('[ PESAN ]:'),chalk.black.bgGreen(new Date), chalk.black.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.black(chalk.bgCyanBright('[ DARI ] :'),chalk.bgYellow(m.pushName),chalk.bgHex('#FF449F')(m.sender),chalk.bgBlue('(' + (m.isGroup ? m.pushName : 'Private Chat', m.chat) + ')')));
			if (db.set[botNumber].autoread) naze.readMessages([m.key]);
		}
		
		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !isCreator) {
				return
			}
			
			// Anti Delete
			if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete && !isCreator && m.isBotAdmin && !m.isAdmin) {
				const mess = chatUpdate.messages[0].message.protocolMessage
				if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }
					const pesan = chats.type === 'conversation' ? { extendedTextMessage: { text: chats.msg, contextInfo: { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }}} : { [chats.type]: chats.msg }
					await naze.relayMessage(m.chat, pesan, {})
				}
			}
			
			// Anti Link Group
			if (db.groups[m.chat].antilink && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.match('chat.whatsapp.com/')) {
					const isGcLink = new RegExp(`https://chat.whatsapp.com/${await naze.groupInviteCode(m.chat)}`, 'i').test(m.text);
					if (isGcLink) return
					await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await naze.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Link Group\nMaaf Link Harus Di Hapus..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Link❗*'}, ...m.key }}}, {})
				}
			}
			
			// Anti Virtex Group
			if (db.groups[m.chat].antivirtex && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.length > 3500) {
					await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await naze.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Virtex..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Virtex❗*'}, ...m.key }}}, {})
					await naze.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
				if (m.msg.nativeFlowMessage && m.msg.nativeFlowMessage.messageParamsJson && m.msg.nativeFlowMessage.messageParamsJson.length > 3500) {
					await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await naze.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Bug..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Bug❗*'}, ...m.key }}}, {})
					await naze.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
			}
			
		}
		
		// Mengetik
		if (db.set[botNumber].autotyping && isCmd) {
			await naze.sendPresenceUpdate('composing', m.chat)
		}
		
		// Salam
		if (/^a(s|ss)alamu('|)alaikum(| )(wr|)( |)(wb|)$/.test(budy?.toLowerCase())) {
			const jwb_salam = ['Wa\'alaikumusalam','Wa\'alaikumusalam wr wb','Wa\'alaikumusalam Warohmatulahi Wabarokatuh']
			m.reply(pickRandom(jwb_salam))
		}
		
		// Cek Expired
		prem.expiredCheck(naze, premium);
		
		// TicTacToe
		let room = Object.values(tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				m.reply({
					'-3': 'Game telah berakhir',
					'-2': 'Invalid',
					'-1': 'Posisi Invalid',
					0: 'Posisi Invalid',
				}[ok])
				return !0
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			let arr = room.game.render().map(v => {
				return {
					X: '❌',
					O: '⭕',
					1: '1️⃣',
					2: '2️⃣',
					3: '3️⃣',
					4: '4️⃣',
					5: '5️⃣',
					6: '6️⃣',
					7: '7️⃣',
					8: '8️⃣',
					9: '9️⃣',
				}[v]
			})
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			if (isWin) {
				db.users[m.sender].limit += 3
				db.users[m.sender].uang += 3000
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
			room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await naze.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m })
			await naze.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
			if (isTie || isWin) {
				delete tictactoe[room.id]
			}
		}
		
		// Suit PvP
		let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
				if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
					m.reply(`@${roof.p2.split`@`[0]} menolak suit,\nsuit dibatalkan`)
					delete suit[roof.id]
					return !0
				}
				roof.status = 'play';
				roof.asal = m.chat;
				clearTimeout(roof.waktu);
				m.reply(`Suit telah dikirimkan ke chat\n\n@${roof.p.split`@`[0]} dan @${roof.p2.split`@`[0]}\n\nSilahkan pilih suit di chat masing-masing klik https://wa.me/${botNumber.split`@`[0]}`)
				if (!roof.pilih) naze.sendMessage(roof.p, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m })
				if (!roof.pilih2) naze.sendMessage(roof.p2, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m })
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) m.reply(`Kedua pemain tidak niat main,\nSuit dibatalkan`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						m.reply(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`)
					}
					delete suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /gunting/i
			let b = /batu/i
			let k = /kertas/i
			let reg = /^(gunting|batu|kertas)/i;
			
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0];
				roof.text = m.text;
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`);
				if (!roof.pilih2) naze.sendMessage(roof.p2, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
				if (!roof.pilih) naze.sendMessage(roof.p, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih)
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
				db.users[roof.p == win ? roof.p : roof.p2].uang += tie ? 0 : 3000
				naze.sendMessage(roof.asal, { text: `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}\n\nPemenang Mendapatkan\n*Hadiah :* Uang(3000) & Limit(3)`.trim(), mentions: [roof.p, roof.p2] }, { quoted: m })
				delete suit[roof.id]
			}
		}
		
		// Tebak Bomb
		let pilih = '🌀', bomb = '💣';
		if (m.sender in tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd && !isCreator) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				tebakbom[m.sender].pick++;
				naze.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
				tebakbom[m.sender].bomb--;
				tebakbom[m.sender].nyawa.pop();
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].nyawa.length < 1) {
					await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n_Pengurangan Limit : 1_`);
					naze.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
					delete tebakbom[m.sender];
				} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join('')}\n\nTerpilih: ${tebakbom[m.sender].pick}\nSisa nyawa: ${tebakbom[m.sender].nyawa}`);
				return !0;
			}
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				tebakbom[m.sender].pick++;
				tebakbom[m.sender].lolos--;
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].lolos < 1) {
					db.users[m.sender].uang += 6000
					await m.reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n*Sisa nyawa :* ${tebakbom[m.sender].nyawa}\n*Bomb :* ${tebakbom[m.sender].bomb}\nBonus Uang 💰 *+6000*`);
					delete tebakbom[m.sender];
				} else m.reply(`*PILIH ANGKA*\n\n${brd.join('')}\n\nTerpilih : ${tebakbom[m.sender].pick}\nSisa nyawa : ${tebakbom[m.sender].nyawa}\nBomb : ${tebakbom[m.sender].bomb}`)
			}
		}
		
		// Game
		const games = { tebaklirik, tekateki, tebaklagu, tebakkata, kuismath, susunkata, tebakkimia, caklontong, tebaknegara, tebakgambar, tebakbendera }
		for (let gameName in games) {
			let game = games[gameName];
			let id = iGame(game, m.chat);
			if (m.quoted && id == m.quoted.id && !isCmd) {
				jawaban = game[m.chat + id].jawaban
				if (gameName == 'kuismath') {
					const difficultyMap = { 'noob': 1, 'easy': 1.5, 'medium': 2.5, 'hard': 4, 'extreme': 5, 'impossible': 6, 'impossible2': 7 };
					let randMoney = difficultyMap[kuismath[m.chat + id].mode]
					if (!isNaN(budy)) {
						if (budy.toLowerCase() == jawaban) {
							db.users[m.sender].uang += randMoney * 1000
							await m.reply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${randMoney * 1000}*`)
							delete kuismath[m.chat + id]
						} else m.reply('*Jawaban Salah!*')
					}
				} else {
					let jawabBenar = /tekateki|tebaklirik|tebaklagu|tebakkata|tebaknegara|tebakbendera/.test(gameName) ? (similarity(budy.toLowerCase(), jawaban) >= almost) : (budy.toLowerCase() == jawaban)
					let bonus = gameName == 'caklontong' ? 9999 : gameName == 'tebaklirik' ? 4299 : gameName == 'susunkata' ? 2989 : 3499
					if (jawabBenar) {
						db.users[m.sender].uang += bonus * 1
						await m.reply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${bonus}*`)
						delete game[m.chat + id]
					} else m.reply('*Jawaban Salah!*')
				}
			}
		}
		
		// Family 100
		if (m.chat in family100) {
			if (m.quoted && m.quoted.id == family100[m.chat].id && !isCmd) {
				let room = family100[m.chat]
				let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
				let isSurender = /^((me)?nyerah|surr?ender)$/i.test(teks)
				if (!isSurender) {
					let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
					if (room.terjawab[index]) return !0
					room.terjawab[index] = m.sender
				}
				let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
				let caption = `Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}\n${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}\n${Array.from(room.jawaban, (jawaban, index) => { return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false }).filter(v => v).join('\n')}\n${isSurender ? '' : `Perfect Player`}`.trim()
				m.reply(caption)
				if (isWin || isSurender) delete family100[m.chat]
			}
		}
		
		// Menfes
		if (!m.isGroup) {
			if (menfes[m.sender] && m.key.remoteJid !== 'status@broadcast') {
				if (!/^del(menfe(s|ss)|confe(s|ss))$/i.test(command)) {
					m.msg.contextInfo = { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}
					const pesan = m.type === 'conversation' ? { extendedTextMessage: { text: m.msg, contextInfo: { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}}} : { [m.type]: m.msg }
					await naze.relayMessage(menfes[m.sender].tujuan, pesan, {});
				}
			}
		}
		
		// Afk
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = db.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			m.reply(`Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
		}
		if (db.users[m.sender].afkTime > -1) {
			let user = db.users[m.sender]
			m.reply(`@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}\nSelama ${clockString(new Date - user.afkTime)}`)
			user.afkTime = -1
			user.afkReason = ''
		}
		
		
		switch(command) {
			// Tempat Add Case
			case '19rujxl1e': {
				console.log('.')
			}
			break
			
			// Owner Menu
			case 'mode': {
				if (!isCreator) return m.reply(mess.owner)
				if (text === 'public') {
					if (naze.public) return m.reply('*Sudah Aktif Sebelumnya*')
					naze.public = true
					m.reply('*Sukse Change To Public Usage*')
				} else if (text === 'self') {
					naze.public = false
					m.reply('*Sukse Change To Self Usage*')
				} else {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'Pilih',
							sections: [{
								title: 'Mode Bot',
								rows: [
									{ title: 'Mode Public', description: 'Mengaktifkan Mode Public', id: 'mode public' },
									{ title: 'Mode Self', description: 'Mengubah Ke Mode Self', id: 'mode self' },
								]
							}]
						}
					}]
					await naze.sendButtonMsg(m.chat, 'Mode Bot', ucapanWaktu, 'Silahkan dipilih Owner🫡', null, buttonnya, m);
				}
			}
			break
			case 'setbio': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Mana text nya?')
				naze.setStatus(q)
				m.reply(`*Bio telah di ganti menjadi ${q}*`)
			}
			break
			case 'setppbot': {
				if (!isCreator) return m.reply(mess.owner)
				if (!/image/.test(mime)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`)
				let media = await naze.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
				if (text.length > 0) {
					let { img } = await generateProfilePicture(media)
					await naze.query({
						tag: 'iq',
						attrs: {
							to: botNumber,
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{
							tag: 'picture',
							attrs: { type: 'image' },
							content: img
						}]
					})
					await fs.unlinkSync(media)
					m.reply('Sukses')
				} else {
					await naze.updateProfilePicture(botNumber, { url: media })
					await fs.unlinkSync(media)
					m.reply('Sukses')
				}
			}
			break
case 'addowner':{
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} $916909137213`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await naze.onWhatsApp(bnnd)
if (ceknye.length == 0) return m.reply(`Kirim Nomor Yang Terdaftar Di Whatsapp!!!`)
owner.push(bnnd)
fs.writeFileSync('./lib/owner.json', JSON.stringify(owner))
m.reply(`Selamat ${bnnd} Anda Sekarang Owner Vinss Botz🫵`)
}
break
case 'delowner': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./lib/owner.json', JSON.stringify(owner))
m.reply(`Nomor ${ya} Sudah Di Hapus Menjadi Owner!⚠️`)
}
break
			case 'join': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Link Group!')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
				const result = args[0].split('https://chat.whatsapp.com/')[1]
				m.reply(mess.wait)
				await naze.groupAcceptInvite(result).catch((res) => {
					if (res.data == 400) return m.reply('Grup Tidak Di Temukan❗');
					if (res.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗');
					if (res.data == 409) return m.reply('Bot Sudah Join Di Grup Tersebut❗');
					if (res.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
					if (res.data == 500) return m.reply('Grup Penuh❗');
				})
			}
			break
			case 'leave': {
				if (!isCreator) return m.reply(mess.owner)
				await naze.groupLeave(m.chat).then(() => naze.sendFromOwner(owner, 'Sukses Keluar Dari Grup', m, { contextInfo: { isForwarded: true }}))
			}
			break
			case 'blokir': case 'block': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await naze.updateBlockStatus(numbersOnly, 'block').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'openblokir': case 'unblokir': case 'openblock': case 'unblock': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await naze.updateBlockStatus(numbersOnly, 'unblock').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'adduang': {
				if (!isCreator) return m.reply(mess.owner)
				if (!args[0] || !args[1]) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 10`)
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await naze.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].uang) {
					addUang(args[1], nmrnya, db)
					m.reply('Sukses Add Uang')
				} else {
					m.reply('User tidak terdaftar di database!')
				}
			}
			break
			case 'addlimit': {
				if (!isCreator) return m.reply(mess.owner)
				if (!args[0] || !args[1]) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 10`)
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await naze.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].limit) {
					addLimit(args[1], nmrnya, db)
					m.reply('Sukses Add limit')
				} else {
					m.reply('User tidak terdaftar di database!')
				}
			}
			break
			case 'addcase': {
if (!isCreator) return m.reply(mess.owner)
 if (!text) return m.reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'naze.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                m.reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                m.reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        m.reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'delcase': {
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('*Masukan nama case yang akan di hapus*')

dellCase('./naze.js', q)
m.reply('*Dellcase Successfully*')
}
break
			case 'listpc': {
				if (!isCreator) return m.reply(mess.owner)
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
				let teks = `● *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
				for (let i of anu) {
					if (store.messages[i] && store.messages[i].array && store.messages[i].array[0]) {
						let nama = store.messages[i].array[0].pushName
						teks += `${setv} *Nama :* ${nama}\n${setv} *User :* @${i.split('@')[0]}\n${setv} *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
					}
				}
				naze.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'listgc': {
				if (!isCreator) return m.reply(mess.owner)
				let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				let teks = `● *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
				for (let i of anu) {
					let metadata = store.groupMetadata[i] || await naze.groupMetadata(i)
					teks += `${setv} *Nama :* ${metadata.subject}\n${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n${setv} *ID :* ${metadata.id}\n${setv} *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *Member :* ${metadata.participants.length}\n\n=====================\n\n`
				}
				naze.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'creategc': case 'buatgc': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} *Nama Gc*`)
				let group = await naze.groupCreate(q, [m.sender])
				let res = await naze.groupInviteCode(group.id)
				await naze.sendMessage(m.chat, { text: `*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Nama Group :* *${q}*`, detectLink: true }, { quoted: m });
				await naze.groupParticipantsUpdate(group.id, [m.sender], 'promote')
				await naze.sendMessage(group.id, { text: 'Done' })
			}
			break
			case 'addpr': case 'addprem': case 'addpremium': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30d\n_d = day_`)
				let [teks1, teks2] = text.split`|`
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await naze.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (teks2) {
					if (!db.users[nmrnya] && !db.users[nmrnya].limit) return m.reply('Nomer tidak terdaftar di BOT !')
					prem.addPremiumUser(nmrnya, teks2, premium);
					m.reply(`Sukses ${command} @${nmrnya.split('@')[0]} Selama ${teks2}`)
					db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.premium
					db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.premium
				} else {
					m.reply(`Masukkan waktunya!\Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30d\n_d = day_`)
				}
			}
			break
			case 'delpr': case 'delprem': case 'delpremium': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} @tag`)
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!db.users[nmrnya] && !db.users[nmrnya].limit) return m.reply('Nomer tidak terdaftar di BOT !')
				if (prem.checkPremiumUser(nmrnya, premium)) {
					premium.splice(prem.getPremiumPosition(nmrnya, premium), 1);
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium));
					m.reply(`Sukses ${command} @${nmrnya.split('@')[0]}`)
					db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.free
					db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.free
				} else {
					m.reply(`User @${nmrnya.split('@')[0]} Bukan Premium❗`)
				}
			}
			break
			case 'listpr': case 'listprem': case 'listpremium': {
				if (!isCreator) return m.reply(mess.owner)
				let txt = `*------「 LIST PREMIUM 」------*\n\n`
				for (let userprem of premium) {
					txt += `➸ *Nomer*: @${userprem.id.split('@')[0]}\n➸ *Limit*: ${db.users[userprem.id].limit}\n➸ *Uang*: ${db.users[userprem.id].uang.toLocaleString('id-ID')}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`
				}
				m.reply(txt)
			}
			break
			case 'addcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !text.startsWith('case')) return m.reply('Masukkan Casenya!')
				fs.readFile('naze.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const posisi = data.indexOf("case '19rujxl1e':");
					if (posisi !== -1) {
						const codeBaru = data.slice(0, posisi) + '\n' + `${text}` + '\n' + data.slice(posisi);
						fs.writeFile('naze.js', codeBaru, 'utf8', (err) => {
							if (err) {
								m.reply('Terjadi kesalahan saat menulis file: ', err);
							} else {
								m.reply('Case berhasil ditambahkan');
							}
						});
					} else {
						m.reply('Gagal Menambahkan case!');
					}
				});
			}
			break
			case 'getcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				const getCase = (cases) => {
					return "case"+`'${cases}'`+fs.readFileSync("naze.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
				}
				m.reply(`${getCase(text)}`)
			}
			break
			case 'delcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				fs.readFile('naze.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const regex = new RegExp(`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`, 'g');
					const modifiedData = data.replace(regex, '');
					fs.writeFile('naze.js', modifiedData, 'utf8', (err) => {
						if (err) {
							m.reply('Terjadi kesalahan saat menulis file: ', err);
						} else {
							m.reply('Case berhasil dihapus dari file');
						}
					});
				});
			}
			break
			case 'getsession': {
				if (!isCreator) return m.reply(mess.owner)
				await naze.sendMessage(m.chat, {
					document: fs.readFileSync('./nazedev/creds.json'),
					mimetype: 'application/json',
					fileName: 'creds.json'
				}, { quoted: m });
			}
			break
			case 'deletesession': case 'delsession': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./nazedev', async function (err, files) {
					if (err) {
						console.log('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => item.startsWith('pre-key') || item.startsWith('sender-key') || item.startsWith('session-'));
					let teks = `Terdeteksi ${filteredArray.length} Session file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Session File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./nazedev/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah Session', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
			break
			case 'deletesampah': case 'delsampah': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./database/sampah', async function (err, files) {
					if (err) {
						console.log('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => item.endsWith('gif') || item.endsWith('png') || item.endsWith('mp3')  || item.endsWith('mp4') || item.endsWith('jpg') ||item.endsWith('webp') ||item.endsWith('webm') || item.endsWith('opus') || item.endsWith('jpeg'));
					let teks = `Terdeteksi ${filteredArray.length} Sampah file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Sampah File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./database/sampah/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
			break
			// Asupan Menu
case 'asupan':{
m.reply(`_Tunggu Sebentar Tuan Sedang Kami Proses⏳_`)
buffer = await getBuffer(`https://api.zacros.my.id/asupan/random`)
await naze.sendMessage(m.chat, {video:{url:buffer}, mimetype: 'video/mp4' }, { quoted: m })
}
break
			
			// Group Menu
			case 'add': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					try {
						await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) =>{
							for (let i of res) {
								let invv = await naze.groupInviteCode(m.chat)
								if (i.status == 408) return m.reply('Dia Baru-Baru Saja Keluar Dari Grub Ini!')
								if (i.status == 401) return m.reply('Dia Memblokir Bot!')
								if (i.status == 409) return m.reply('Dia Sudah Join!')
								if (i.status == 500) return m.reply('Grub Penuh!')
								if (i.status == 403) {
									await naze.sendMessage(m.chat, { text: `@${numbersOnly.split('@')[0]} Tidak Dapat Ditambahkan\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nMelalui Jalur Pribadi`, mentions: [numbersOnly] }, { quoted : m })
									await naze.sendMessage(`${numbersOnly ? numbersOnly : '6282113821188@s.whatsapp.net'}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: @${m.sender.split('@')[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, detectLink: true, mentions: [numbersOnly, m.sender] }, { quoted : fkontak }).catch((err) => m.reply('Gagal Mengirim Undangan!'))
								} else if (i.status !== 200) {
									m.reply('Gagal Add User')
								}
							}
						})
					} catch (e) {
						m.reply('Gagal Add User')
					}
				}
			}
			break
			case 'kick': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => m.reply('Gagal Kick User!'))
				}
			}
			break
			case 'promote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'demote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'setname': case 'setnamegc': case 'setsubject': case 'setsubjectgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} textnya`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await naze.groupUpdateSubject(m.chat, teksnya).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'setdesc': case 'setdescgc': case 'setdesk': case 'setdeskgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} textnya`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await naze.groupUpdateDescription(m.chat, teksnya).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'setppgroups': case 'setppgrup': case 'setppgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!m.quoted) return m.reply('Reply Gambar yang mau dipasang di Profile Bot')
				if (!/image/.test(mime) && /webp/.test(mime)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`)
				let media = await naze.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
				if (text.length > 0) {
					let { img } = await generateProfilePicture(media)
					await naze.query({
						tag: 'iq',
						attrs: {
							to: m.chat,
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{
							tag: 'picture',
							attrs: { type: 'image' },
							content: img
						}]
					})
					await fs.unlinkSync(media)
					m.reply('Sukses')
				} else {
					await naze.updateProfilePicture(m.chat, { url: media })
					await fs.unlinkSync(media)
					m.reply('Sukses')
				}
			}
			break
			case 'delete': case 'del': case 'd': {
				if (!m.quoted) return m.reply('Reply pesan yang mau di delete')
				await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: m.isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
			}
			break
			case 'linkgroup': case 'linkgrup': case 'linkgc': case 'urlgroup': case 'urlgrup': case 'urlgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let response = await naze.groupInviteCode(m.chat)
				await naze.sendMessage(m.chat, { text: `https://chat.whatsapp.com/${response}\n\nLink Group : ${(await naze.groupMetadata(m.chat)).subject}`, detectLink: true }, { quoted: m });
			}
			break
			case 'revoke': case 'newlink': case 'newurl': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				await naze.groupRevokeInvite(m.chat).then((a) => {
					m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${m.metadata.subject}`)
				}).catch((err) => m.reply('Gagal!'))
			}
			break
			case 'group': case 'grup': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text === 'close') {
					await naze.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Sukses Menutup Group*`))
				} else if (text === 'open') {
					await naze.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Sukses Membuka Group*`))
				} else {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'Pilih',
							sections: [{
								title: 'Mode Group',
								rows: [
									{ title: 'Open Group', description: 'Membuka Group', id: '.grup open' },
									{ title: 'Close Group', description: 'Menutup Group', id: '.grup close' },
								]
							}]
						}
					}]
					await naze.sendButtonMsg(m.chat, 'Mode Group', ucapanWaktu, 'Silahkan dipilih 🎋', null, buttonnya, m);
				}
			}
			break
case 'onlyindo':{
if (!isCreator) return m.reply(mess.owner)
if (args[0] === "on") {
if (global.onlyindo === true) return m.reply("Udh on")
global.onlyindo = true
m.reply("Onlyindo berhasil diaktifkan")
} else if (args[0] === "off") {
if (global.onlyindo === false) return m.reply("Udh off")
global.onlyindo = false
m.reply("Onlyindo berhasil dinonaktifkan")
} else {
let buttonnya = [{
name: 'single_select',
buttonParamsJson: {
title: 'IG : @vinss404',
sections: [{
title: 'Onlyindo',
rows: [
{ title: 'Onlyindo Aktif', description: 'Mengaktifkan Onlyindo', id: '.onlyindo on' },
{ title: 'Onlyindo Tidak Aktif', description: 'Mematikan Onlyindo', id: '.onlyindo off' },
]
}]
}
}]
await naze.sendButtonMsg(m.chat, 'Mode Only Indo', ucapanWaktu, 'Silahkan dipilih 🎋', null, buttonnya, m);
}
}
break
case 'anticall': {
if (!isCreator) return m.reply(mess.owner)
if (args[0] === "on") {
if (global.anticall === true) return m.reply("Udh on")
global.anticall = true
m.reply("Anticall berhasil diaktifkan")
} else if (args[0] === "off") {
if (global.anticall === false) return m.reply("Udh off")
global.anticall = false
m.reply("Anticall berhasil dinonaktifkan")
} else {
let buttonnya = [{
name: 'single_select',
buttonParamsJson: {
title: 'IG : @vinss404',
sections: [{
title: 'Anti Call',
rows: [
{ title: 'Anti Call Aktif', description: 'Mengaktifkan Anticall', id: '.anticall on' },
{ title: 'Anti Call Tidak Aktif', description: 'Mematikan Anticall', id: '.anticall off' },
]
}]
}
}]
await naze.sendButtonMsg(m.chat, 'Mode AntiCall', ucapanWaktu, 'Silahkan dipilih 🎋', null, buttonnya, m);
}
}
break
			case 'antilink': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text === 'on') {
					if (db.groups[m.chat].antilink) return m.reply('*Sudah Aktif Sebelumnya*')
					db.groups[m.chat].antilink = true
					m.reply('*Anti Link Aktif !*')
				} else if (text === 'off') {
					db.groups[m.chat].antilink = false
					m.reply('*Anti Link Tidak Aktif !*')
				} else {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'Pilih',
							sections: [{
								title: 'Anti Link',
								rows: [
									{ title: 'Anti Link Aktif', description: 'Mengaktifkan Antilink', id: '.antilink on' },
									{ title: 'Anti Link Tidak Aktif', description: 'Mematikan Antilink', id: '.antilink off' },
								]
							}]
						}
					}]
					await naze.sendButtonMsg(m.chat, 'Mode Group', ucapanWaktu, 'Silahkan dipilih 🎋', null, buttonnya, m);
				}
			}
			break
			case 'upswteks':
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply('Teksnya?')
                    teks = body.slice(10)
                    naze.relayMessage('status@broadcast', teks, MessageType.text)
                    m.reply(`Sukses upload status:\n${teks}`)
                    break	
			case 'antivirtex': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text === 'on') {
					if (db.groups[m.chat].antivirtex) return m.reply('*Sudah Aktif Sebelumnya*')
					db.groups[m.chat].antivirtex = true
					m.reply('*Anti Virtex Aktif !*')
				} else if (text === 'off') {
					db.groups[m.chat].antivirtex = false
					m.reply('*Anti Virtex Tidak Aktif !*')
				} else {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'Pilih',
							sections: [{
								title: 'Anti Virtex',
								rows: [
									{ title: 'Anti Virtex Aktif', description: 'Mengaktifkan Antivirtex', id: '.antivirtex on' },
									{ title: 'Anti Virtex Tidak Aktif', description: 'Mematikan Antivirtex', id: '.antivirtex off' },
								]
							}]
						}
					}]
					await naze.sendButtonMsg(m.chat, 'Mode Group', ucapanWaktu, 'Silahkan dipilih 🎋', null, buttonnya, m);
				}
			}
			break
			case 'antidelete': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text === 'on') {
					if (db.groups[m.chat].antidelete) return m.reply('*Sudah Aktif Sebelumnya*')
					db.groups[m.chat].antidelete = true
					m.reply('*Anti Delete Aktif !*')
				} else if (text === 'off') {
					db.groups[m.chat].antidelete = false
					m.reply('*Anti Delete Tidak Aktif !*')
				} else {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'Pilih',
							sections: [{
								title: 'Anti Delete',
								rows: [
									{ title: 'Anti Delete Aktif', description: 'Mengaktifkan Antidelete', id: '.antidelete on' },
									{ title: 'Anti Delete Tidak Aktif', description: 'Mematikan Antidelete', id: '.antidelete off' },
								]
							}]
						}
					}]
					await naze.sendButtonMsg(m.chat, 'Mode Group', ucapanWaktu, 'Silahkan dipilih 🎋', null, buttonnya, m);
				}
			}
			break
			case 'welcome': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text === 'on') {
					if (db.groups[m.chat].welcome) return m.reply('*Sudah Aktif Sebelumnya*')
					db.groups[m.chat].welcome = true
					m.reply('*Welcome Aktif !*')
				} else if (text === 'off') {
					db.groups[m.chat].welcome = false
					m.reply('*Welcome Tidak Aktif !*')
				} else {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'Pilih',
							sections: [{
								title: 'Welcome',
								rows: [
									{ title: 'Welcome Aktif', description: 'Mengaktifkan Welcome', id: '.welcome on' },
									{ title: 'Welcome Tidak Aktif', description: 'Mematikan Welcome', id: '.welcome off' },
								]
							}]
						}
					}]
					await naze.sendButtonMsg(m.chat, 'Mode Group', ucapanWaktu, 'Silahkan dipilih 🎋', null, buttonnya, m);
				}
			}
			break
			case 'tagall': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let setv = pickRandom(listv)
				let teks = `*Tag All*\n\n*Pesan :* ${q ? q : ''}\n\n`
				for (let mem of m.metadata.participants) {
					teks += `${setv} @${mem.id.split('@')[0]}\n`
				}
				await naze.sendMessage(m.chat, { text: teks, mentions: m.metadata.participants.map(a => a.id) }, { quoted: m })
			}
			break
			case 'hidetag': case 'h': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				naze.sendMessage(m.chat, { text : q ? q : '' , mentions: m.metadata.participants.map(a => a.id)}, { quoted: m })
			}
			break
			case 'totag': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`)
				delete m.quoted.chat
				await naze.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: m.metadata.participants.map(a => a.id) })
			}
			break
			case 'listonline': case 'liston': {
				if (!m.isGroup) return m.reply(mess.group)
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				if (!store.presences && !store.presences[id]) return m.reply('Sedang Tidak ada yang online!')
				let online = [...Object.keys(store.presences[id]), botNumber]
				await naze.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => m.reply('Gagal'))
			}
			break
			// Asupan
			case 'cecanindo': {
m.reply(mess.wait)
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: naze.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) m.reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('tobrut hijab');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await naze.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
			
			// Bot Menu
			case 'owner': {
				await naze.sendContact(m.chat, owner, m);
			}
			break
			case 'profile': case 'cek': {
				const user = Object.keys(db.users)
				const infoUser = db.users[m.sender]
				const teks = `*Profile @${m.sender.split('@')[0]}* :\nUser Bot : ${user.includes(m.sender) ? 'True' : 'False'}\nUser : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}\nLimit : ${infoUser.limit}\nUang : ${infoUser ? infoUser.uang.toLocaleString('id-ID') : '0'}`
				await m.reply(teks)
			}
			break
			case 'leaderboard': {
				const entries = Object.entries(db.users).sort((a, b) => b[1].uang - a[1].uang).slice(0, 10).map(entry => entry[0]);
				let teksnya = '╭──❍「 *LEADERBOARD* 」❍\n'
				for (let i = 0; i < entries.length; i++) {
					teksnya += `│• ${i + 1}. @${entries[i].split('@')[0]}\n│• Balance : ${db.users[entries[i]].uang.toLocaleString('id-ID')}\n│\n`
				}
				m.reply(teksnya + '╰──────❍');
			}
			break
			case 'req': case 'request': {
				if (!text) return m.reply('Mau Request apa ke Owner?')
				await naze.sendMessage(m.chat, { text: `*Request Telah Terkirim Ke Owner*\n_Terima Kasih🙏_` }, { quoted: m })
				await naze.sendFromOwner(owner, `Pesan Dari : @${m.sender.split('@')[0]}\nUntuk Owner\n\nRequest ${text}`, m, { contextInfo: { mentionedJid: [m.sender], isForwarded: true }})
			}
			break
			case 'totalfitur': {
				const total = ((fs.readFileSync('./naze.js').toString()).match(/case '/g) || []).length
				m.reply(`Total Fitur : ${total}`);
			}
			break
			case 'daily': case 'claim': {
				daily(m, db)
			}
			break
			case 'transfer': case 'tf': {
				transfer(m, args, db)
			}
			break
			case 'buy': {
				buy(m, args, db)
			}
			break
			case 'react': {
				naze.sendMessage(m.chat, { react: { text: args[0], key: m.quoted ? m.quoted.key : m.key }})
			}
			break
			case 'tagme': {
				naze.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: m })
			}
			break
			case 'runtime': case 'tes': case 'bot': {
				if (text && text.startsWith('--') && isCreator) {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'Pilih',
							sections: [{
								title: 'Bot Settings',
								rows: [
									{ title: 'Anti Call On🟢', description: 'Mengaktifkan Anti Call', id: '.bot anticall on' },
									{ title: 'Anti Call Off🔴', description: 'Mematikan Anti Call', id: '.bot anticall off' },
									{ title: 'Auto Bio On🟢', description: 'Mengaktifkan Auto Bio', id: '.bot autobio on' },
									{ title: 'Auto Bio Off🔴', description: 'Mematikan Auto Bio', id: '.bot autobio off' },
									{ title: 'Auto Read On🟢', description: 'Mengaktifkan Auto Read', id: '.bot autoread on' },
									{ title: 'Auto Read Off🔴', description: 'Mematikan Auto Read', id: '.bot autoread off' },
									{ title: 'Auto Type On🟢', description: 'Mengaktifkan Auto Type', id: '.bot autotype on' },
									{ title: 'Auto Type Off🔴', description: 'Mematikan Auto Type', id: '.bot autotype off' },
									{ title: 'Read SW On🟢', description: 'Mengaktifkan Read SW', id: '.bot readsw on' },
									{ title: 'Read SW Off🔴', description: 'Mematikan Read SW', id: '.bot readsw off' },
									{ title: 'Multi Prefix On🟢', description: 'Mengaktifkan Multi Prefix', id: '.bot multiprefix on' },
									{ title: 'Multi Prefix Off🔴', description: 'Mematikan Multi Prefix', id: '.bot multiprefix off' }
								]
							}]
						}
					}]
					await naze.sendButtonMsg(m.chat, 'Bot Settings', ucapanWaktu, 'Silahkan dipilih Owner🫡', null, buttonnya, m);
				} else if (text && isCreator) {
					if (text === 'anticall on') db.set[botNumber].anticall = true, m.reply('Sukses Mengaktifkan Anticall');
					if (text === 'anticall off') db.set[botNumber].anticall = false, m.reply('Sukses Mematikan Anticall');
					if (text === 'autobio on') db.set[botNumber].autobio = true, m.reply('Sukses Mengaktifkan Autobio');
					if (text === 'autobio off') db.set[botNumber].autobio = false, m.reply('Sukses Mematikan Autobio');
					if (text === 'autoread on') db.set[botNumber].autoread = true, m.reply('Sukses Mengaktifkan Autoread');
					if (text === 'autoread off') db.set[botNumber].autoread = false, m.reply('Sukses Mematikan Autoread');
					if (text === 'autotype on') db.set[botNumber].autotyping = true, m.reply('Sukses Mengaktifkan Autotype');
					if (text === 'autotype off') db.set[botNumber].autotyping = false, m.reply('Sukses Mematikan Autotype');
					if (text === 'readsw on') db.set[botNumber].readsw = true, m.reply('Sukses Mengaktifkan Read SW');
					if (text === 'readsw off') db.set[botNumber].readsw = false, m.reply('Sukses Mematikan Read SW');
					if (text === 'multiprefix on') db.set[botNumber].multiprefix = true, m.reply('Sukses Mengaktifkan Multiprefix');
					if (text === 'multiprefix off') db.set[botNumber].multiprefix = false, m.reply('Sukses Mematikan Multiprefix');
					let settingsBot = Object.entries(db.set[botNumber]).map(([key, value]) => {
						let qhk = (typeof value === 'boolean') ? (value ? 'on🟢' : 'off🔴') : value;
						return `${key.charAt(0).toUpperCase() + key.slice(1)} : ${qhk}`;
					}).join('\n');
					if (text === 'settings') m.reply(settingsBot);
				} else {
					naze.sendMessage(m.chat, { text: `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*` }, { quoted: m })
				}
			}
			break
			case 'ping': case 'botstatus': case 'statusbot': {
				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, { length }) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_NodeJS Memory Usaage_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				m.reply(respon)
			}
			break
			case 'speedtest': case 'speed': {
				m.reply('Testing Speed...')
				let cp = require('child_process')
				let { promisify } = require('util')
				let exec = promisify(cp.exec).bind(cp)
				let o
				try {
					o = await exec('python3 speed.py')
				} catch (e) {
					o = e
				} finally {
					let { stdout, stderr } = o
					if (stdout.trim()) m.reply(stdout)
					if (stderr.trim()) m.reply(stderr)
				}
			}
			break
			case 'afk': {
				let user = db.users[m.sender]
				user.afkTime = + new Date
				user.afkReason = text
				m.reply(`@${m.sender.split('@')[0]} Telah Afk${text ? ': ' + text : ''}`)
			}
			break
			case 'readviewonce': case 'readviewone': case 'rvo': {
				if (!m.quoted) return m.reply(`Reply view once message\nExample: ${prefix + command}`)
				if (m.quoted.msg.viewOnce) {
					m.quoted.msg.viewOnce = false
					await naze.sendMessage(m.chat, { forward: m.quoted }, { quoted: m })
				} else if (m.quoted.msg.message && m.quoted.msg.message.audioMessage && m.quoted.msg.message.audioMessage.viewOnce) {
					m.quoted.msg.message.audioMessage.viewOnce = false
					m.quoted.msg.message.audioMessage.contextInfo = { forwardingScore: 1, isForwarded: true, mentionedJid: [m.sender] }
					await naze.relayMessage(m.chat, m.quoted.msg.message, {})
				} else {
					m.reply(`Reply view once message\nExample: ${prefix + command}`)
				}
			}
			break
			case 'toonce':
case 'toviewonce': {
if (!m.quoted) return m.reply(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await naze.downloadAndSaveMediaMessage(quoted)
naze.sendMessage(m.chat, {
image: {
url: anuan
},
caption: `Here you go!`,
fileLength: "999",
viewOnce: true
}, {
quoted: m
})
} else if (/video/.test(mime)) {
anuanuan = await naze.downloadAndSaveMediaMessage(quoted)
naze.sendMessage(m.chat, {
video: {
url: anuanuan
},
caption: `Here you go!`,
fileLength: "99999999",
viewOnce: true
}, {
quoted: m
})
}
}
break
			case 'inspect': {
				if (!text) return m.reply('Masukkan Link Group!')
				let code = q.match(/chat.whatsapp.com\/([\w\d]*)/g);
				if (code === null) return m.reply('No invite url detected.');
				code = code[0].replace('chat.whatsapp.com/', '');
				await naze.groupGetInviteInfo(code).then(anu => {
					let { id, subject, owner, subjectOwner, creation, desc, descId, participants, size, descOwner } = anu
					console.log(anu);
					let par = `*Nama Gc* : ${subject}\n*ID* : ${id}\n${owner ? `*Creator* : @${owner.split('@')[0]}` : '*Creator* : -'}\n*Jumlah Member* : ${size}\n*Gc Dibuat Tanggal* : ${new Date(creation * 1000).toLocaleString()}\n*DescID* : ${descId ? descId : '-'}\n${subjectOwner ? `*Nama GC Diubah Oleh* : @${subjectOwner.split('@')[0]}` : '*Nama GC Diubah Oleh* : -'}\n${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n\n*Desc* : ${desc ? desc : '-'}\n`;
					naze.sendTextMentions(m.chat, par, m);
				}).catch((res) => {
					if (res.data == 406) return m.reply('Grup Tidak Di Temukan❗');
					if (res.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
				});
			}
			break
			case 'addmsg': {
				if (!m.quoted) return m.reply('Reply Pesan Yang Ingin Disave Di Database')
				if (!text) return m.reply(`Example : ${prefix + command} file name`)
				let msgs = db.database
				if (text.toLowerCase() in msgs) return m.reply(`'${text}' telah terdaftar di list pesan`)
				msgs[text.toLowerCase()] = m.quoted
				delete msgs[text.toLowerCase()].chat
				m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'\nAkses dengan ${prefix}getmsg ${text}\nLihat list Pesan Dengan ${prefix}listmsg`)
			}
			break
			case 'delmsg': case 'deletemsg': {
				if (!text) return m.reply('Nama msg yg mau di delete?')
				let msgs = db.database
				if (text == 'allmsg') {
					db.database = {}
					m.reply('Berhasil menghapus seluruh msg dari list pesan')
				} else {
					if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
					delete msgs[text.toLowerCase()]
					m.reply(`Berhasil menghapus '${text}' dari list pesan`)
				}
			}
			break
			case 'getmsg': {
				if (!text) return m.reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
				let msgs = db.database
				if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar di list pesan`)
				await naze.relayMessage(m.chat, msgs[text.toLowerCase()], {})
			}
			break
			case 'listmsg': {
				let seplit = Object.entries(db.database).map(([nama, isi]) => { return { nama, message: getContentType(isi) }})
				let teks = '「 LIST DATABASE 」\n\n'
				for (let i of seplit) {
					teks += `${setv} *Name :* ${i.nama}\n${setv} *Type :* ${i.message?.replace(/Message/i, '')}\n───────────────\n`
				}
				m.reply(teks)
			}
			break
			case 'q': case 'quoted': {
				if (!m.quoted) return m.reply('Reply Pesannya!')
				const anu = await m.getQuotedObj()
				if (!anu) return m.reply('Format Tidak Tersedia!')
				if (!anu.quoted) return m.reply('Pesan Yang Anda Reply Tidak Mengandung Reply')
				await naze.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
			}
			break
			case 'confes': case 'confess': case 'menfes': case 'menfess': {
				if (m.isGroup) return m.reply(mess.private)
				if (menfes[m.sender]) return m.reply(`Kamu Sedang Berada Di Sesi ${command}!`)
				if (!text) return m.reply(`Example : ${prefix + command} 62xxxx|Nama Samaran`)
				let [teks1, teks2] = text.split`|`
				if (teks1) {
					const tujuan = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					const onWa = await naze.onWhatsApp(tujuan)
					if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
					menfes[m.sender] = {
						tujuan: tujuan,
						nama: teks2 ? teks2 : 'Orang',
						waktu: setTimeout(() => {
							if (menfes[m.sender]) m.reply(`_Waktu ${command} habis_`)
							delete menfes[m.sender];
						}, 600000)
					};
					menfes[tujuan] = {
						tujuan: m.sender,
						nama: 'Penerima',
						waktu: setTimeout(() => {
							if (menfes[tujuan]) naze.sendMessage(tujuan, { text: `_Waktu ${command} habis_` });
							delete menfes[tujuan];
						}, 600000)
					};
					naze.sendMessage(tujuan, { text: `_${command} connected_\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_` });
					m.reply(`_Memulai ${command}..._\n*Silahkan Mulai kirim pesan/media*\n*Durasi ${command} hanya selama 10 menit*\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`)
				} else {
					m.reply(`Masukkan Nomernya!\nExample : ${prefix + command} 62xxxx|Nama Samaran`)
				}
			}
			break
			case 'delconfes': case 'delconfess': case 'delmenfes': case 'delmenfess': {
				if (!menfes[m.sender]) return m.reply(`Kamu Tidak Sedang Berada Di Sesi ${command.split('del')[1]}!`)
				let anu = menfes[m.sender]
				naze.sendMessage(anu.tujuan, { text: `Chat Di Akhiri Oleh ${anu.nama ? anu.nama : 'Seseorang'}` })
				m.reply(`Sukses Mengakhiri Sesi ${command.split('del')[1]}!`)
				delete menfes[anu.tujuan];
				delete menfes[m.sender];
			}
			break
			
			// Tools Menu
			case 'fetch': case 'get': {
				if (!/^https?:\/\//.test(text)) return m.reply('Awali dengan http:// atau https://');
				const { data } = await axios.get('https://api.ipify.org?format=json')
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
					if (!/json|html|plain/.test(res.headers['content-type'])) {
						await m.reply(text)
					} else {
						m.reply(util.format(res.data).replace(new RegExp(data.ip.replace(/\./g, '\\.'), 'g'), 'xxx-xxx-xxx-xxx'))
					}
				} catch (e) {
					m.reply(util.format(e).replace(new RegExp(data.ip.replace(/\./g, '\\.'), 'g'), 'xxx-xxx-xxx-xxx'))
				}
			}
			break
			case 'toaud': case 'toaudio': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toAudio(media, 'mp4')
				await naze.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
			}
			break
			case 'tomp3': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toAudio(media, 'mp4')
				await naze.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Convert By naze Bot.mp3`}, { quoted : m })
			}
			break
			case 'tovn': case 'toptt': case 'tovoice': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toPTT(media, 'mp4')
				await naze.sendMessage(m.chat, { audio: audio, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: m })
			}
			break
			case 'togif': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				m.reply(mess.wait)
				let media = await naze.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.gif')}`;
				exec(`convert ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					naze.sendMessage(m.chat, { video: buffer, gifPlayback: true }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toimage': case 'toimg': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				m.reply(mess.wait)
				let media = await naze.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.png')}`;
				exec(`convert ${media}[0] ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					naze.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toptv': {
				if (!/video/.test(mime)) return m.reply(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`)
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
					const anu = await (m.quoted ? m.quoted.download() : m.download())
					const msg = await generateWAMessageContent({ video: anu }, { upload: naze.waUploadToServer })
					await naze.relayMessage(m.chat, { ptvMessage: msg.videoMessage }, {})
				} else {
					m.reply('Reply Video Yang Mau Di Ubah Ke PTV Message!')
				}
			}
			break
			case 'tourl': {
				let { fileIO, TelegraPh } = require('./lib/uploader')
				if (/jpg|jpeg|png/.test(mime)) {
					m.reply(mess.wait)
					let media = await (m.quoted ? m.quoted.download() : m.download())
					let anu = await TelegraPh(media)
					m.reply('Url : ' + anu)
				} else if (/webp|video|sticker|audio/.test(mime)) {
					m.reply(mess.wait)
					let media = await (m.quoted ? m.quoted.download() : m.download())
					let anu = await UguuSe(media)
					m.reply('Url : ' + anu.url)
				} else {
					m.reply('Send Media yg ingin di Upload!')
				}
			}
			break
			case 'texttospech': case 'tts': case 'tospech': {
				if (!text) return m.reply('Mana text yg mau diubah menjadi audio?')
				let { tts } = require('./lib/tts')
				let anu = await tts(text)
				naze.sendMessage(m.chat, { audio: anu, ptt: true, mimetype: 'audio/mpeg' }, { quoted: m })
			}
			break
			case 'translate': case 'tr': {
				if (text && text == 'list') {
					let list_tr = `╭──❍「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────❍`;
					m.reply(list_tr)
				} else {
					if (!m.quoted && (!text|| !args[1])) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
					let lang = args[0] ? args[0] : 'id'
					let teks = args[1] ? args.slice(1).join(' ') : m.quoted.text
					try {
						let hasil = await translate(teks, { to: lang, autoCorrect: true })
						m.reply(`To : ${lang}\n${hasil[0]}`)
					} catch (e) {
						m.reply(`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${prefix + command} list`)
					}
				}
			}
			break
			case 'toqr': case 'qr': {
				if (!text) return m.reply(`Ubah Text ke Qr dengan *${prefix + command}* textnya`)
				m.reply(mess.wait)
				await naze.sendMessage(m.chat, { image: { url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + text }, caption: 'Nih Bro' }, { quoted: m })
			}
			break
			case 'tohd': case 'remini': case 'hd': {
				if (/image/.test(mime)) {
					const { remini } = require('./lib/remini')
					let media = await (m.quoted ? m.quoted.download() : m.download())
					remini(media, 'enhance').then(a => {
						naze.sendMessage(m.chat, { image: a, caption: 'Done' }, { quoted: m });
					});
				} else {
					m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`)
				}
			}
			break
			case 'ssweb': {
				if (!text) return m.reply(`Example: ${prefix + command} https://github.com/nazedev/naze-md`)
				if (!text.startsWith('http')) {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
					await naze.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				} else {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
					await naze.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				}
			}
			break
			case 'sticker': case 'stiker': case 's': case 'stickergif': case 'stikergif': case 'sgif': {
				if (!/image|video|sticker/.test(quoted.type)) return m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik`)
				let media = await (m.quoted ? m.quoted.download() : m.download())
				if (/image|webp/.test(mime)) {
					m.reply(mess.wait)
					if (text == 'meta') {
						await naze.sendAsSticker(m.chat, media, m, { packname: packname, author: author, isAvatar: 1 })
					} else {
						await naze.sendAsSticker(m.chat, media, m, { packname: packname, author: author })
					}
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
					m.reply(mess.wait)
					await naze.sendAsSticker(m.chat, media, m, { packname: packname, author: author })
				} else {
					m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik`)
				}
			}
			break
			case 'stickerwm': case 'swm': case 'curi': case 'colong': case 'take': case 'stickergifwm': case 'sgifwm': {
				if (!/image|video|sticker/.test(quoted.type)) return m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik`)
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let teks1 = text.split`|`[0] ? text.split`|`[0] : ' '
				let teks2 = text.split`|`[1] ? text.split`|`[1] : ' '
				if (/image|webp/.test(mime)) {
					m.reply(mess.wait)
					if (text == 'meta') {
						await naze.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2, isAvatar: 1 })
					} else {
						await naze.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
					}
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
					m.reply(mess.wait)
					await naze.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
				} else {
					m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
				}
			}
			break
			case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
				try {
					if (!isPremium) return m.reply(mess.prem)
					if (!/image|webp/.test(mime)) return m.reply(`Kirim/reply image/sticker\nDengan caption ${prefix + command} atas|bawah`)
					if (!text) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} atas|bawah`)
					m.reply(mess.wait)
					let atas = text.split`|`[0] ? text.split`|`[0] : '-'
					let bawah = text.split`|`[1] ? text.split`|`[1] : '-'
					let media = await (m.quoted ? m.quoted.download() : m.download())
					let mem = await UguuSe(media)
					let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
					await naze.sendAsSticker(m.chat, smeme, m, { packname: packname, author: author })
				} catch (e) {
					console.log(e)
					m.reply('Gagal!')
				}
			}
			break
			case 'emojimix': {
				if (!text) return m.reply(`Example: ${prefix + command} 😅+🤔`)
				let [emoji1, emoji2] = text.split`+`
				if (!emoji1 && !emoji2) return m.reply(`Example: ${prefix + command} 😅+🤔`)
				try {
					let anu = await axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
					if (anu.data.results.length < 1) return m.reply(`Mix Emoji ${text} Tidak Ditemukan!`)
					for (let res of anu.data.results) {
						await naze.sendAsSticker(m.chat, res.url, m, { packname: packname, author: author })
					}
				} catch (e) {
					m.reply('Gagal Mix Emoji!')
				}
			}
			break
			case 'nulis': {
				m.reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
			}
			break
			case 'nuliskiri': {
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+140+153',
					fixHeight,
					'./src/nulis/images/buku/setelahkiri.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					naze.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/buku/setelahkiri.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: m })
				})
			}
			break
			case 'nuliskanan': {
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+128+129',
					fixHeight,
					'./src/nulis/images/buku/setelahkanan.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					naze.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/buku/setelahkanan.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: m })
				})
			}
			break
			case 'foliokiri': {
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+48+185',
					fixHeight,
					'./src/nulis/images/folio/setelahkiri.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					naze.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/folio/setelahkiri.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: m })
				})
			}
			break
			case 'foliokanan': {
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+89+190',
					fixHeight,
					'./src/nulis/images/folio/setelahkanan.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					naze.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/folio/setelahkanan.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: m })
				})
			}
			break
			case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai': {
				try {
					let set;
					if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						m.reply(mess.wait)
						let media = await naze.downloadAndSaveMediaMessage(qmsg)
						let ran = `./database/sampah/${getRandom('.mp3')}`;
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return m.reply(err)
							let buff = fs.readFileSync(ran)
							naze.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
							fs.unlinkSync(ran)
						});
					} else {
						m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
					}
				} catch (e) {
					console.log(e)
					m.reply('Gagal!')
				}
			}
			break
			
			// Ai Menu
			case 'ai': case 'gpt': case 'openai': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				const hasil = await chatGpt(text);
				m.reply(hasil)
			}
			break
			case 'txt2img': case 'texttoimage': {
				if (!text) return m.reply(`Example: ${prefix + command} anime, HD`)
				try {
					await naze.sendFileUrl(m.chat, `https://widipe.com/ai/text2img?text=${encodeURIComponent(text)}`, 'Done', m)
				} catch (e) {
					m.reply('Gagal Create Gambar!')
				}
			}
			break
// Islam Menu
case 'kisahnabi': {
if (!text) return m.reply(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return m.reply("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")
     
let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

m.reply(`${hasil}`)
}
break
case 'quotesislami': {
const islami = [
   {
      "id": "1",
      "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
      "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
   },
   {
      "id": "2",
      "arabic": "مَنْ صَبَرَ ظَفِرَ",
      "arti": "Barang siapa bersabar, maka dia akan beruntung."
   },
   {
      "id": "3",
      "arabic": "مَنْ جَدَّ وَجَـدَ",
      "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
   },
   {
      "id": "4",
      "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
      "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
   },
   {
      "id": "5",
      "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
      "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
   },
   {
      "id": 6,
      "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
      "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
   },
   {
      "id": "7",
      "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
      "arti": "Kesabaran akan menolong segala pekerjaan."
   },
   {
      "id": "8",
      "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
      "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
   },
   {
      "id": "9",
      "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
      "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
   },
   {
      "id": "10",
      "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
      "arti": "Telur hari ini lebih baik daripada ayam esok hari."
   },
   {
      "id": "11",
      "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
      "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
   },
   {
      "id": "12",
      "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
      "arti": "Waktu itu lebih berharga daripada emas."
   },
   {
      "id": "13",
      "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
      "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
   },
   {
      "id": "14",
      "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
      "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
   },
   {
      "id": "15",
      "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
      "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
   },
   {
      "id": "16",
      "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
      "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
   },{
      "id": "17",
      "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
      "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
   },
   {
      "id": "18",
      "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
      "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
   },
   {
      "id": "19",
      "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
      "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
   },
   {
      "id": "20",
      "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
      "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
   },
   {
      "id": "21",
      "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
      "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
   },
   {
      "id": "22",
      "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
      "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
   },
   {
      "id": "23",
      "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
      "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
   },
   {
      "id": "24",
      "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
      "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
   },
   {
      "id": "25",
      "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
      "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
   }
]
const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
m.reply(`${arabic}\n${arti}`)
}
break
case 'niatsholat': {
    if (!q) return m.reply(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
    {
        index: 1,
        solat: "subuh",
        latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 2,
        solat: "maghrib",
        latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 3,
        solat: "dzuhur",
        latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 4,
        solat: "isha",
        latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 5,
        solat: "ashar",
        latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
    }
]
    let text = q.toLowerCase() || ''
    let data = Object.values(niatsholat).find(v => v.solat == text)
    if (!data) return m.reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
    m.reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break
case 'bacaansholat': {
const bacaanshalat = {
  "result": [
    {
      "id": 1,
      "name": "Bacaan Iftitah",
      "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
      "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
      "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
    },
    {
      "id": 2,
      "name": "Al Fatihah",
      "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا   الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
      "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
      "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
    },
    {
      "id": 3,
      "name": "Bacaan Ruku",
      "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
      "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
      "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
    },
    {
      "id": 4,
      "name": "Bacaan Sujud",
      "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
      "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
      "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
    },
    {
      "id": 5,
      "name": "Bacaan Duduk Diantara Dua Sujud",
      "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
      "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
      "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
    },
    {
      "id": 6,
      "name": "Duduk Tasyahud Awal",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
      "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
    },
    {
      "id": 7,
      "name": "Duduk Tasyahud Akhir",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
      "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
    },
    {
      "id": 8,
      "name": "Salam",
      "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
      "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
      "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
    }
  ]
}
    let bacaan = JSON.stringify(bacaanshalat)
    let json = JSON.parse(bacaan)
    let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
    let contoh = `*「 Bacaan Shalat 」*\n\n`
    m.reply(`${contoh} + ${data}`)
}
break
case 'doaharian': {
let src = JSON.parse(fs.readFileSync('./lib/doaharian.json', 'utf-8'))
let caption = src.map((v, i) => {
        return `
*${i + 1}.* ${v.title}

❃ Latin :
${v.latin}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
    }).join('\n\n')
    m.reply(`${caption}`)

}
break
case 'ayatkursi': {
  let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
  m.reply(caption)
}
break
			
			// Search Menu
			case 'google': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				let search = await googleIt({ query: text })
				let msg = search.map(({ title, link, snippet}) => {
					return `*${title}*\n_${link}_\n_${snippet}_`
				}).join('\n\n');
				m.reply(msg)
			}
			break
			case 'gimage': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				gis(text, async (err, result) => {
					if (err) return m.reply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`)
					if (result == undefined) {
						m.reply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`)
					} else if (result.length > 1) {
						let anu = pickRandom(result)
						await naze.sendMessage(m.chat, { image: { url: anu.url }, caption: 'Url : '+ anu.url }, { quoted: m })
					} else m.reply('Gagal Mencari Gambar!')
				});
			}
			break
			case 'play': case 'ytplay': case 'yts': case 'ytsearch': case 'youtubesearch': {
				if (!text) return m.reply(`Example: ${prefix + command} dj komang`)
				m.reply(mess.wait)
				const res = await yts.search(text);
				const hasil = pickRandom(res.all)
				const teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Description:* ${hasil.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.author?.name || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.seconds || 'Tidak tersedia'} second (${hasil.timestamp || 'Tidak tersedia'})\n*🔎Source:* ${hasil.url || 'Tidak tersedia'}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
				await naze.sendMessage(m.chat, { image: { url: hasil.thumbnail }, caption: teksnya }, { quoted: m });
			}
			break
			case 'pixiv': {
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let { pixivdl } = require('./lib/pixiv')
					let res = await pixivdl(text)
					m.reply(mess.wait)
					for (let i = 0; i < res.media.length; i++) {
						let caption = i == 0 ? `${res.caption}\n\n*By:* ${res.artist}\n*Tags:* ${res.tags.join(', ')}` : ''
						let mime = (await FileType.fromBuffer(res.media[i])).mime 
						await naze.sendMessage(m.chat, { [mime.split('/')[0]]: res.media[i], caption, mimetype: mime }, { quoted: m })
					}
				} catch (e) {
					m.reply('Pencarian Tidak ditemukan!')
				}
			}
			break
			case 'pinterest': {
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				let anu = await pinterest2(text)
				let result = pickRandom(anu)
				if (anu.length < 1) {
					m.reply('Pencarian tidak ditemukan!');
				} else {
					await naze.sendMessage(m.chat, { image: { url: result.images_url }, caption: `*Media Url :* ${result.pin}${result.link ? '\n*Source :* ' + result.link : ''}` }, { quoted: m })
				}
			}
			break
			case 'wallpaper': {
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				let anu = await wallpaper(text)
				let result = pickRandom(anu)
				if (anu.length < 1) {
					m.reply('Pencarian tidak ditemukan!');
				} else {
					await naze.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `⭔ title : ${q}\n⭔ category : ${result.type}\n⭔ media url : ${result.image[2] || result.image[1] || result.image[0]}`}, { quoted: m })
				}
			}
			break
			case 'ringtone': {
				if (!text) return m.reply(`Example: ${prefix + command} black rover`)
				let anu = await ringtone(text)
				let result = pickRandom(anu)
				await naze.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
			}
			break
			case 'npm': case 'npmjs': {
				if (!text) return m.reply(`Example: ${prefix + command} axios`)
				let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
				let { objects } = await res.json()
				if (!objects.length) return m.reply('Pencarian Tidak di temukan')
				let txt = objects.map(({ package: pkg }) => {
					return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
				}).join`\n\n`
				m.reply(txt)
			}
			break
			
			// Downloader Menu
			case 'ytmp3': case 'ytaudio': case 'ytplayaudio': {
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp3(text);
					await naze.sendMessage(m.chat, {
						audio: { url: hasil.result },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: hasil.title,
								body: hasil.channel,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.thumb,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					}, { quoted: m });
				} catch (e) {
					try {
						const anu = new Ytdl()
						const hasil = await anu.play(text);
						const hasil_url = Object.values(hasil.audio).find(v => v.size === '128kbps')?.url || Object.values(hasil.audio)[0]?.url
						await naze.sendMessage(m.chat, { audio: { url: hasil_url }, mimetype: 'audio/mpeg' }, { quoted: m });
					} catch (e) {
						try {
							const hasil = await allDl(text, { isAudioOnly: true })
							await naze.sendMessage(m.chat, { audio: { url: hasil.url }, mimetype: 'audio/mpeg' }, { quoted: m });
						} catch (e) {
							m.reply('Gagal Mendownload Audio!')
						}
					}
				}
			}
			break
			case 'ytmp4': case 'ytvideo': case 'ytplayvideo': {
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp4(text);
					await naze.sendMessage(m.chat, { video: { url: hasil.result }, caption: `*📍Title:* ${hasil.title}\n*✏Description:* ${hasil.desc ? hasil.desc : ''}\n*🚀Channel:* ${hasil.channel}\n*🗓Upload at:* ${hasil.uploadDate}` }, { quoted: m });
				} catch (e) {
					try {
						const anu = new Ytdl()
						const hasil = await anu.play(text);
						const hasil_url = Object.values(hasil.video).find(v => v.size === 'auto')?.url || Object.values(hasil.video)[0]?.url
						await naze.sendMessage(m.chat, { video: { url: hasil_url }}, { quoted: m });
					} catch (e) {
						try {
							const hasil = await allDl(text)
							await naze.sendMessage(m.chat, { video: { url: hasil.url }}, { quoted: m });
						} catch (e) {
							m.reply('Gagal Mendownload Video!')
						}
					}
				}
			}
			break
			case 'ig': case 'instagram': case 'instadl': case 'igdown': case 'igdl': {
				if (!text) return m.reply(`Example: ${prefix + command} url_instagram`)
				if (!text.includes('instagram.com')) return m.reply('Url Tidak Mengandung Result Dari Instagram!')
				const hasil = await instaDownload(text);
				if(hasil.length < 1) return m.reply('Postingan Tidak Tersedia atau Privat!')
				m.reply(mess.wait)
				for (let i = 0; i < hasil.length; i++) {
					await naze.sendFileUrl(m.chat, hasil[i].download, 'Done', m)
				}
			}
			break
			case 'igstory': case 'instagramstory': case 'instastory': case 'storyig': {
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const hasil = await instaStory(text);
					m.reply(mess.wait)
					for (let i = 0; i < hasil.results.length; i++) {
						await naze.sendFileUrl(m.chat, hasil.results[i].url, 'Done', m)
					}
				} catch (e) {
					m.reply('Username tidak ditemukan atau Privat!');
				}
			}
			break
			case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				const hasil = await tiktokDl(text);
				m.reply(mess.wait)
				if (hasil.size_nowm) {
					await naze.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
				} else {
					for (let i = 0; i < hasil.data.length; i++) {
						await naze.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i+1}`, m)
					}
				}
			}
			break
			case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				const hasil = await tiktokDl(text);
				m.reply(mess.wait)
				await naze.sendMessage(m.chat, {
					audio: { url: hasil.music_info.url },
					mimetype: 'audio/mpeg',
					contextInfo: {
						externalAdReply: {
							title: 'TikTok • ' + hasil.author.nickname,
							body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
							previewType: 'PHOTO',
							thumbnailUrl: hasil.cover,
							mediaType: 1,
							renderLargerThumbnail: true,
							sourceUrl: text
						}
					}
				}, { quoted: m });
			}
			break
			case 'fb': case 'fbdl': case 'fbdown': case 'facebook': case 'facebookdl': case 'facebookdown': case 'fbdownload': case 'fbmp4': case 'fbvideo': {
				if (!text) return m.reply(`Example: ${prefix + command} url_facebook`)
				if (!text.includes('facebook.com')) return m.reply('Url Tidak Mengandung Result Dari Facebook!')
				const hasil = await facebookDl(text);
				if (hasil.results.length < 1) {
					m.reply('Video Tidak ditemukan!')
				} else {
					m.reply(mess.wait)
					await naze.sendFileUrl(m.chat, hasil.results[0].url, `*🎐Title:* ${hasil.caption}`, m);
				}
			}
			break
			
			// Random Menu
case 'randomcecan1':{
m.reply(`_Tunggu Sebentar Tuan Sedang Kami Proses⏳_`)
buffer = await getBuffer('https://c.top4top.io/m_26649xrwy1.mp4')
await naze.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
case 'randomcecan2':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://b.top4top.io/m_27832zh400.mp4')
await naze.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
case 'randomcecan3':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://g.top4top.io/m_2783uxoa40.mp4')
await naze.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan4':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://b.top4top.io/m_26628tg3t1.mp4')
await naze.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan5':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://k.top4top.io/m_26648pl8c1.mp4')
await naze.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan6':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://l.top4top.io/m_2662wywyl1.mp4')
await naze.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan7':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://h.top4top.io/m_26627pr7n1.mp4')
await naze.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan8':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://l.top4top.io/m_2662rdkb01.mp4')
await naze.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan9':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://h.top4top.io/m_2662l0ljt1.mp4')
await naze.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan10':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://i.top4top.io/m_26628j9e61.mp4')
await naze.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
break
			case 'motivasi': {
				const hasil = pickRandom(JSON.parse(fs.readFileSync('./database/kata-kata/motivasi.json')));
				m.reply(hasil)
			}
			break
			case 'quotes': {
				const hasil = pickRandom(JSON.parse(fs.readFileSync('./database/kata-kata/quotes.json')));
				m.reply(`_${hasil.quotes}_\n\n*- ${hasil.author}*`)
			}
			break
			case 'truth': {
				const hasil = pickRandom(JSON.parse(fs.readFileSync('./database/kata-kata/truth.json')));
				m.reply(`_${hasil}_`)
			}
			break
			case 'renungan': {
				const hasil = pickRandom(JSON.parse(fs.readFileSync('./database/kata-kata/renungan.json')));
				m.reply('', {
					contextInfo: {
						forwardingScore: 10,
						isForwarded: true,
						externalAdReply: {
							title: (m.pushName || 'Anonim'),
							thumbnailUrl: hasil,
							mediaType: 1,
							previewType: 'PHOTO',
							renderLargerThumbnail: true,
						}
					}
				});
			}
			break
			case 'randomcolor': case 'color': case 'warnarandom': case 'warna': {
				m.reply(mess.wait)
				let anu = await fetchJson(`https://api.popcat.xyz/randomcolor`)
				await naze.sendFileUrl(m.chat, anu.image, `*Nama Warna : ${anu.name}*\n*Code : ${anu.hex}*`, m)
			}
			break
			case 'coffe': case 'kopi': {
				await naze.sendFileUrl(m.chat, 'https://coffee.alexflipnote.dev/random', '☕ Random Coffe', m)
			}
			break
			case 'waifu': {
				if (text == 'nsfw') {
					const res = await fetchJson('https://api.waifu.pics/nsfw/waifu')
					await naze.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
				} else {
					const res = await fetchJson('https://api.waifu.pics/sfw/waifu')
					await naze.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
				}
			}
			break
			case 'neko': {
				if (text == 'nsfw') {
					const res = await fetchJson('https://api.waifu.pics/nsfw/neko')
					await naze.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
				} else {
					const res = await fetchJson('https://api.waifu.pics/sfw/neko')
					await naze.sendFileUrl(m.chat, res.url, 'Random Neko', m)
				}
			}
			break
			
			
			// Fun Menu
			case 'dadu': {
				let ddsa = [{ url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png', no: 1 },{ url: 'https://telegra.ph/file/797f86e444755282374ef.png', no: 2 },{ url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png', no: 3 },{ url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png', no: 4 },{ url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png', no: 5 },{ url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png', no: 6 }]
				let media = pickRandom(ddsa)
				await naze.sendAsSticker(m.chat, media.url, m, { packname: packname, author: author, isAvatar: 1 })
			}
			break
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
				if (!m.quoted && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
				ter = command[1].toLowerCase()
				tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
				m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
			}
			break
			case 'bisakah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya menang?`)
				let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
				let keh = bisa[Math.floor(Math.random() * bisa.length)]
				m.reply(`*Bisakah ${text}*\nJawab : ${keh}`)
			}
			break
			case 'apakah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya bisa menang?`)
				let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Mungkin Tidak','Mungkin Iya','Ntahlah']
				let kah = apa[Math.floor(Math.random() * apa.length)]
				m.reply(`*${command} ${text}*\nJawab : ${kah}`)
			}
			break
			case 'kapan': case 'kapankah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya menang?`)
				let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Ntahlah','Tidak Akan Pernah']
				let koh = kapan[Math.floor(Math.random() * kapan.length)]
				m.reply(`*${command} ${text}*\nJawab : ${koh}`)
			}
			break
			case 'tanyakerang': case 'kerangajaib': case 'kerang': {
				if (!text) return m.reply(`Example : ${prefix + command} boleh pinjam 100?`)
				let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
				let jwb = pickRandom(krng)
				m.reply(`*Pertanyaan : ${text}*\n*Jawab : ${jwb}*`)
			}
			break
			case 'cekmati': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`)
				let teksnya = text.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').replace(/\d/g, '');
				let { data } = await axios.get(`https://api.agify.io/?name=${teksnya ? teksnya : 'bot'}`);
				let jawab = (`Nama : ${text}\n*Mati Pada Umur :* ${data.age == null ? (Math.floor(Math.random() * 90) + 20) : data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
				m.reply(jawab)
			}
			break
			case 'ceksifat': {
				let sifat_a = ['Bijak','Sabar','Kreatif','Humoris','Mudah bergaul','Mandiri','Setia','Jujur','Dermawan','Idealis','Adil','Sopan','Tekun','Rajin','Pemaaf','Murah hati','Ceria','Percaya diri','Penyayang','Disiplin','Optimis','Berani','Bersyukur','Bertanggung jawab','Bisa diandalkan','Tenang','Kalem','Logis']
				let sifat_b = ['Sombong','Minder','Pendendam','Sensitif','Perfeksionis','Caper','Pelit','Egois','Pesimis','Penyendiri','Manipulatif','Labil','Penakut','Vulgar','Tidak setia','Pemalas','Kasar','Rumit','Boros','Keras kepala','Tidak bijak','Pembelot','Serakah','Tamak','Penggosip','Rasis','Ceroboh','Intoleran']
				let teks = `╭──❍「 *Cek Sifat* 」❍\n│• Sifat @${m.sender.split('@')[0]}\n│• Nama : *${(m.pushName || 'Tanpa Nama')}*\n│• Orang yang : *${pickRandom(sifat_a)}*\n│• Kekurangan : *${pickRandom(sifat_b)}*\n│• Keberanian : *${Math.floor(Math.random() * 100)}%*\n│• Kepedulian : *${Math.floor(Math.random() * 100)}%*\n│• Kecemasan : *${Math.floor(Math.random() * 100)}%*\n│• Ketakutan : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Baik : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Buruk : *${Math.floor(Math.random() * 100)}%*\n╰──────❍`
				m.reply(teks)
			}
			break
			case 'cekkhodam': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`)
				let anu = await cekKhodam(text)
				m.reply(`Khodam dari *${text}* adalah *${anu}*`)
			}
			break
			case 'rate': case 'nilai': {
				let rate = Math.floor(Math.random() * 100)
				m.reply(`Rate Bot : *${rate}%*`)
			}
			break
			case 'jodohku': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata[m.chat].participants || m.metadata.participants).map(a => a.id)
				let jodoh = pickRandom(member)
				m.reply(`👫Jodoh mu adalah\n@${m.sender.split('@')[0]} ❤ @${jodoh.split('@')[0]}`);
			}
			break
			case 'jadian': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata[m.chat].participants || m.metadata.participants).map(a => a.id)
				let jadian1 = pickRandom(member)
				let jadian2 = pickRandom(member)
				m.reply(`Ciee yang Jadian💖 Jangan lupa Donasi🗿\n@${jadian1.split('@')[0]} ❤ @${jadian2.split('@')[0]}`);
			}
			break
			case 'fitnah': {
				let [teks1, teks2, teks3] = text.split`|`
				if (!teks1 || !teks2 || !teks3) return m.reply(`Example : ${prefix + command} pesan target|pesan mu|nomer/tag target`)
				let ftelo = { key: { fromMe: false, participant: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net', ...(m.isGroup ? { remoteJid: m.chat } : { remoteJid: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net'})}, message: { conversation: teks1 }}
				naze.sendMessage(m.chat, { text: teks2 }, { quoted: ftelo });
			}
			break
			// Game Menu
			case 'slot': {
				await gameSlot(naze, m, db)
			}
			break
			case 'casino': {
				await gameCasinoSolo(naze, m, prefix, db)
			}
			break
			case 'rampok': case 'merampok': {
				await gameMerampok(m, db)
			}
			break
			case 'begal': {
				await gameBegal(naze, m, db)
			}
			break
			case 'suitpvp': case 'suit': {
				let poin = 10
				let poin_lose = 10
				let timeout = 60000
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
				if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
				if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[0]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
				let id = 'suit_' + new Date() * 1
				let caption = `_*SUIT PvP*_\n\n@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit\n\nSilahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
				suit[id] = {
					chat: m.reply(caption),
					id: id,
					p: m.sender,
					p2: m.mentionedJid[0],
					status: 'wait',
					waktu: setTimeout(() => {
						if (suit[id]) m.reply(`_Waktu suit habis_`)
						delete suit[id]
					}, 60000), poin, poin_lose, timeout
				}
			}
			break
			case 'ttc': case 'ttt': case 'tictactoe': {
				let TicTacToe = require('./lib/tictactoe');
				if (Object.values(tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`Kamu masih didalam game!\nKetik *${prefix}del${command}* Jika Ingin Mengakhiri sesi`);
				let room = Object.values(tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
				if (room) {
					m.reply('Partner ditemukan!')
					room.o = m.chat
					room.game.playerO = m.sender
					room.state = 'PLAYING'
					let arr = room.game.render().map(v => {
						return {X: '❌',O: '⭕',1: '1️⃣',2: '2️⃣',3: '3️⃣',4: '4️⃣',5: '5️⃣',6: '6️⃣',7: '7️⃣',8: '8️⃣',9: '9️⃣'}[v]
					})
					let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nMenunggu @${room.game.currentTurn.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
					if (room.x !== room.o) await naze.sendMessage(room.x, { texr: str, mentions: parseMention(str) }, { quoted: m })
					await naze.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
				} else {
					room = {
						id: 'tictactoe-' + (+new Date),
						x: m.chat,
						o: '',
						game: new TicTacToe(m.sender, 'o'),
						state: 'WAITING',
						waktu: setTimeout(() => {
							if (tictactoe[roomnya.id]) m.reply(`_Waktu ${command} habis_`)
							delete tictactoe[roomnya.id]
						}, 300000)
					}
					if (text) room.name = text
					naze.sendMessage(m.chat, { text: 'Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''), mentions: m.mentionedJid }, { quoted: m })
					tictactoe[room.id] = room
				}
			}
			break
			case 'tebakbom': {
				if (tebakbom[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				function shuffle(array) {
					return array.sort(() => Math.random() - 0.5);
				}
				tebakbom[m.sender] = {
					petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
					board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
					bomb: 3,
					lolos: 7,
					pick: 0,
					nyawa: ['❤️', '❤️', '❤️'],
					waktu: setTimeout(() => {
						if (tebakbom[m.sender]) m.reply(`_Waktu ${command} habis_`)
						delete tebakbom[m.sender];
					}, 120000)
				}
				m.reply(`*TEBAK BOM*\n\n${tebakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${tebakbom[m.sender].bomb}\nNyawa : ${tebakbom[m.sender].nyawa.join("")}`);
			}
			break
			case 'tekateki': {
				if (iGame(tekateki, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(JSON.parse(fs.readFileSync('./database/games/tekateki.json')));
				let { key } = await m.reply(`🎮 Teka Teki Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tekateki[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tekateki, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tekateki[m.chat + key.id].jawaban)
					delete tekateki[m.chat + key.id]
				}
			}
			break
			case 'tebaklirik': {
				if (iGame(tebaklirik, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(JSON.parse(fs.readFileSync('./database/games/tebaklirik.json')));
				let { key } = await m.reply(`🎮 Tebak Lirik Berikut :\n\n${hasil.soal}\n\nWaktu : 90s\nHadiah *+4299*`)
				tebaklirik[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(90000)
				if (rdGame(tebaklirik, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaklirik[m.chat + key.id].jawaban)
					delete tebaklirik[m.chat + key.id]
				}
			}
			break
			case 'tebaklagu': {
			}
			break
			case 'tebakkata': {
				if (iGame(tebakkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(JSON.parse(fs.readFileSync('./database/games/tebakkata.json')));
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkata[m.chat + key.id].jawaban)
					delete tebakkata[m.chat + key.id]
				}
			}
			break
			case 'family100': {
				if (family100.hasOwnProperty(m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(JSON.parse(fs.readFileSync('./database/games/family100.json')));
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 5m\nHadiah *+3499*`)
				family100[m.chat] = {
					soal: hasil.soal,
					jawaban: hasil.jawaban,
					terjawab: Array.from(hasil.jawaban, () => false),
					id: key.id
				}
				await sleep(300000)
				if (family100.hasOwnProperty(m.chat)) {
					m.reply('Waktu Habis\nJawaban:\n- ' + family100[m.chat].jawaban.join('\n- '))
					delete family100[m.chat]
				}
			}
			break
			case 'susunkata': {
				if (iGame(susunkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(JSON.parse(fs.readFileSync('./database/games/susunkata.json')));
				let { key } = await m.reply(`🎮 Susun Kata Berikut :\n\n${hasil.soal}\nTipe : ${hasil.tipe}\n\nWaktu : 60s\nHadiah *+2989*`)
				susunkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(susunkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + susunkata[m.chat + key.id].jawaban)
					delete susunkata[m.chat + key.id]
				}
			}
			break
			case 'tebakkimia': {
				if (iGame(tebakkimia, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(JSON.parse(fs.readFileSync('./database/games/tebakkimia.json')));
				let { key } = await m.reply(`🎮 Tebak Kimia Berikut :\n\n${hasil.unsur}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkimia[m.chat + key.id] = {
					jawaban: hasil.lambang.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkimia, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkimia[m.chat + key.id].jawaban)
					delete tebakkimia[m.chat + key.id]
				}
			}
			break
			case 'caklontong': {
				if (iGame(caklontong, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(JSON.parse(fs.readFileSync('./database/games/caklontong.json')));
				let { key } = await m.reply(`🎮 Jawab Pertanyaan Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+9999*`)
				caklontong[m.chat + key.id] = {
					...hasil,
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(caklontong, m.chat, key.id)) {
					m.reply(`Waktu Habis\nJawaban: ${caklontong[m.chat + key.id].jawaban}\n"${caklontong[m.chat + key.id].deskripsi}"`)
					delete caklontong[m.chat + key.id]
				}
			}
			break
			case 'tebaknegara': {
				if (iGame(tebaknegara, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(JSON.parse(fs.readFileSync('./database/games/tebaknegara.json')));
				let { key } = await m.reply(`🎮 Tebak Negara Dari Tempat Berikut :\n\n*Tempat : ${hasil.tempat}*\n\nWaktu : 60s\nHadiah *+3499*`)
				tebaknegara[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebaknegara, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaknegara[m.chat + key.id].jawaban)
					delete tebaknegara[m.chat + key.id]
				}
			}
			break
			case 'tebakgambar': {
				if (iGame(tebakgambar, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(JSON.parse(fs.readFileSync('./database/games/tebakgambar.json')));
				let { key } = await naze.sendFileUrl(m.chat, hasil.img, `🎮 Tebak Gambar Berikut :\n\n${hasil.deskripsi}\n\nWaktu : 60s\nHadiah *+3499*`, m)
				tebakgambar[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakgambar, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakgambar[m.chat + key.id].jawaban)
					delete tebakgambar[m.chat + key.id]
				}
			}
			break
			case 'tebakbendera': {
				if (iGame(tebakbendera, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(JSON.parse(fs.readFileSync('./database/games/tebakbendera.json')));
				let { key } = await m.reply(`🎮 Tebak Bendera Berikut :\n\n*Bendera : ${hasil.bendera}*\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakbendera[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakbendera, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakbendera[m.chat + key.id].jawaban)
					delete tebakbendera[m.chat + key.id]
				}
			}
			break
			case 'kuismath': case 'math': {
				const { genMath, modes } = require('./lib/math');
				const inputMode = ['noob', 'easy', 'medium', 'hard','extreme','impossible','impossible2'];
				if (kuismath.hasOwnProperty(m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
				if (!inputMode.includes(text.toLowerCase())) return m.reply('Mode tidak ditemukan!')
				let result = await genMath(text.toLowerCase())
				m.reply(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu : ${(result.waktu / 1000).toFixed(2)} detik`).then(a => {
					kuismath[m.chat] = {
						jawaban: result.jawaban,
						mode: text.toLowerCase(),
						id: a.key.id
					}
				})
				await sleep(result.waktu)
				if (kuismath.hasOwnProperty(m.chat)) {
					m.reply('Waktu Habis\nJawaban: ' + kuismath[m.chat].jawaban)
					delete kuismath[m.chat]
				}
			}
			break
			
			case 'couple': {
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
naze.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, {quoted:m})
naze.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, {quoted:m})
}
break

case 'aesthetic': {
let src = JSON.parse(fs.readFileSync('./src/media/randompics/aesthetic.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'antiwork':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/antiwork.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'blackpink':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/blackpink.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'bike':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/bike.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'boneka':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/boneka.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'cosplay':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/cosplay.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'cat':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/cat.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'doggo':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/doggo.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'justina':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/justina.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'kayes':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/kayes.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'kpop':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/kpop.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'notnot':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/notnot.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'car':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/car.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'profilepic':  case 'profilepicture':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/profile.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'pubg':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/pubg.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'rose':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/rose.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'ryujin':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/ryujin.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'ulzzangboy':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzangboy.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'ulzzanggirl':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzanggirl.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/wallml.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
case 'wallpaperphone': case 'wallphone':{
let src = JSON.parse(fs.readFileSync('./src/media/randompics/wallhp.json'))
let hasil = pickRandom(src)
naze.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
}
break
			
			// Menu
			case 'menu': {
				let profile
				try {
					profile = await naze.profilePictureUrl(m.sender, 'image');
				} catch (e) {
					profile = fake.anonim
				}
				const menunya = `
╔════《 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢 》══════╗
╠ *Nama* : ${m.pushName ? m.pushName : 'Tanpa Nama'}
╠ *Id* : @${m.sender.split('@')[0]}
╠ *User* : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}
╠ *Limit* : ${isVip ? 'VIP' : db.users[m.sender].limit }
╠ *Uang* : ${db.users[m.sender] ? db.users[m.sender].uang.toLocaleString('id-ID') : '0'}
╚═══════《✧》════════╝
╔════《 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 》══════╗
╠ *Nama Bot* : ${botname}
╠ *Powered* : @${'0@s.whatsapp.net'.split('@')[0]}
╠ *Owner* : @${owner[0].split('@')[0]}
╠ *Mode* : ${naze.public ? 'Public' : 'Self'}
╠ *Prefix* :${db.set[botNumber].multiprefix ? '「 MULTI-PREFIX 」' : ' *'+prefix+'*' }
╚═══════《✧》════════╝
╔════《 𝗔𝗕𝗢𝗨𝗧 》══════╗
╠ *Tanggal* : ${tanggal}
╠ *Hari* : ${hari}
╠ *Jam* : ${jam} WIB
╚═══════《✧》════════╝`
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: menunya
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./src/media/naze.png')}, { upload: naze.waUploadToServer})), 
                  title: '`AUTO UPDATE YT Vinss Students`',
                  gifPlayback: false,
                  subtitle: author,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"SEMUA MENU","id":"${prefix}allmenu"}`
              },              
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YOUTUBE\",\"url\":\"https://youtube.com/@VinssBotz\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"INSTAGRAM\",\"url\":\"https://instagram.com/vinss404\",\"merchant_url\":\"https://www.google.com\"}"
              },                          
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"OWNER","id":"${prefix}owner"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"SALURAN WHATSAPP\",\"url\":\"https://whatsapp.com/channel/0029VaF4IIt1CYoaRgoOaX2i\",\"merchant_url\":\"https://www.google.com\"}"
              }                         
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363272816888939@newsletter',
                  newsletterName: author,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await naze.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'allmenu': {
let profile
try {
profile = await naze.profilePictureUrl(m.sender, 'image');
} catch (e) {
profile = fake.anonim
}
const menunya = `
╔════《 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢 》═══╗
╠ *Nama* : ${m.pushName ? m.pushName : 'Tanpa Nama'}
╠ *Id* : @${m.sender.split('@')[0]}
╠ *User* : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}
╠ *Limit* : ${isVip ? 'VIP' : db.users[m.sender].limit }
╠ *Uang* : ${db.users[m.sender] ? db.users[m.sender].uang.toLocaleString('id-ID') : '0'}
╚═══════《✧》════════╝
╔════《 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 》════╗
╠ *Nama Bot* : ${botname}
╠ *Powered* : @${'0@s.whatsapp.net'.split('@')[0]}
╠ *Owner* : @${owner[0].split('@')[0]}
╠ *Mode* : ${naze.public ? 'Public' : 'Self'}
╠ *Prefix* :${db.set[botNumber].multiprefix ? '「 MULTI-PREFIX 」' : ' *'+prefix+'*' }
╚═══════《✧》════════╝
╔════《 𝗔𝗕𝗢𝗨𝗧 》══════╗
╠ *Tanggal* : ${tanggal}
╠ *Hari* : ${hari}
╠ *Jam* : ${jam} WIB
╚═══════《✧》════════╝

╔════《 𝗕𝗢𝗧 》══════╗
╠${setv} ${prefix}profile
╠${setv} ${prefix}claim
╠${setv} ${prefix}buy [item] (nominal)
╠${setv} ${prefix}transfer
╠${setv} ${prefix}leaderboard
╠${setv} ${prefix}request (text)
╠${setv} ${prefix}react (emoji)
╠${setv} ${prefix}tagme
╠${setv} ${prefix}runtime
╠${setv} ${prefix}totalfitur
╠${setv} ${prefix}ping
╠${setv} ${prefix}afk
╠${setv} ${prefix}rvo (reply pesan viewone)
╠${setv} ${prefix}inspect (url gc)
╠${setv} ${prefix}addmsg
╠${setv} ${prefix}delmsg
╠${setv} ${prefix}getmsg
╠${setv} ${prefix}listmsg
╠${setv} ${prefix}q (reply pesan)
╠${setv} ${prefix}menfes (62xxx|nama samaran)
╚═══════《✧》════════╝
╔════《 𝗚𝗥𝗢𝗨𝗣 》══════╗
╠${setv} ${prefix}add (62xxx)
╠${setv} ${prefix}kick (@tag/62xxx)
╠${setv} ${prefix}promote (@tag/62xxx)
╠${setv} ${prefix}demote (@tag/62xxx)
╠${setv} ${prefix}setname (nama baru gc)
╠${setv} ${prefix}setdesc (desk)
╠${setv} ${prefix}setppgc (reply imgnya)
╠${setv} ${prefix}delete (reply pesan)
╠${setv} ${prefix}linkgrup
╠${setv} ${prefix}revoke
╠${setv} ${prefix}tagall
╠${setv} ${prefix}hidetag
╠${setv} ${prefix}totag (reply pesan)
╠${setv} ${prefix}listonline
╠${setv} ${prefix}group
╠${setv} ${prefix}antilink (on/off)
╠${setv} ${prefix}welcome (on/off)
╠${setv} ${prefix}antidelete (on/off)
╚═══════《✧》════════╝
╔════《 𝗦𝗘𝗔𝗥𝗖𝗛 》═════╗
╠${setv} ${prefix}ytsearch (query)
╠${setv} ${prefix}pixiv (query)
╠${setv} ${prefix}pinterest (query)
╠${setv} ${prefix}wallpaper (query)
╠${setv} ${prefix}ringtone (query)
╠${setv} ${prefix}google (query)
╠${setv} ${prefix}gimage (query)
╚═══════《✧》════════╝
╔════《 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 》═══╗
╠${setv} ${prefix}ytmp3 (url)
╠${setv} ${prefix}ytmp4 (url)
╠${setv} ${prefix}instagram (url)
╠${setv} ${prefix}tiktok (url)
╠${setv} ${prefix}facebook (url)
╚═══════《✧》════════╝
╔════《 𝗜𝗦𝗟𝗔𝗠 𝗠𝗘𝗡𝗨 》══╗
╠${setv} ${prefix}kisahnabi
╠${setv} ${prefix}quotesislami
╠${setv} ${prefix}niatsholat
╠${setv} ${prefix}bacaansholat
╠${setv} ${prefix}doaharian
╠${setv} ${prefix}ayatkursi
╚═══════《✧》════════╝
╔════《 𝗧𝗢𝗢𝗟𝗦 》══════╗
╠${setv} ${prefix}get (url)
╠${setv} ${prefix}hd (reply pesan)
╠${setv} ${prefix}toaudio (reply pesan)
╠${setv} ${prefix}tomp3 (reply pesan)
╠${setv} ${prefix}tovn (reply pesan)
╠${setv} ${prefix}toimage (reply pesan)
╠${setv} ${prefix}toptv (reply pesan)
╠${setv} ${prefix}tourl (reply pesan)
╠${setv} ${prefix}tts (textnya)
╠${setv} ${prefix}toqr (textnya)
╠${setv} ${prefix}ssweb (url)
╠${setv} ${prefix}sticker (send/reply img)
╠${setv} ${prefix}colong (reply stiker)
╠${setv} ${prefix}smeme (send/reply img)
╠${setv} ${prefix}emojimix 🙃+💀
╠${setv} ${prefix}nulis
╠${setv} ${prefix}translate
╠${setv} ${prefix}fat (reply audio)
╠${setv} ${prefix}fast (reply audio)
╠${setv} ${prefix}bass (reply audio)
╠${setv} ${prefix}slow (reply audio)
╠${setv} ${prefix}tupai (reply audio)
╠${setv} ${prefix}deep (reply audio)
╠${setv} ${prefix}robot (reply audio)
╠${setv} ${prefix}blown (reply audio)
╠${setv} ${prefix}reverse (reply audio)
╠${setv} ${prefix}smooth (reply audio)
╠${setv} ${prefix}earrape (reply audio)
╠${setv} ${prefix}nightcore (reply audio)
╚═══════《✧》════════╝
╔════《 𝗔𝗜 》══════╗
╠${setv} ${prefix}ai (query)
╠${setv} ${prefix}gpt (query)
╚═══════《✧》════════╝
╔════《 𝗚𝗔𝗠𝗘 》══════╗
╠${setv} ${prefix}tictactoe
╠${setv} ${prefix}suit
╠${setv} ${prefix}slot
╠${setv} ${prefix}math (level)
╠${setv} ${prefix}begal
╠${setv} ${prefix}casino (nominal)
╠${setv} ${prefix}rampok (@tag)
╠${setv} ${prefix}tekateki
╠${setv} ${prefix}tebaklirik
╠${setv} ${prefix}tebakkata
╠${setv} ${prefix}tebakbom
╠${setv} ${prefix}susunkata
╠${setv} ${prefix}tebakkimia
╠${setv} ${prefix}caklontong
╠${setv} ${prefix}tebaknegara
╠${setv} ${prefix}tebakgambar
╠${setv} ${prefix}tebakbendera
╚═══════《✧》════════╝
╔════《 𝗙𝗨𝗡 》═══════╗
╠${setv} ${prefix}dadu
╠${setv} ${prefix}bisakah (text)
╠${setv} ${prefix}apakah (text)
╠${setv} ${prefix}kapan (text)
╠${setv} ${prefix}kerangajaib (text)
╠${setv} ${prefix}cekmati (nama lu)
╠${setv} ${prefix}ceksifat
╠${setv} ${prefix}cekkhodam (nama lu)
╠${setv} ${prefix}rate (reply pesan)
╠${setv} ${prefix}jodohku
╠${setv} ${prefix}jadian
╠${setv} ${prefix}fitnah
╠${setv} ${prefix}halah (text)
╠${setv} ${prefix}hilih (text)
╠${setv} ${prefix}huluh (text)
╠${setv} ${prefix}heleh (text)
╠${setv} ${prefix}holoh (text)
╠${setv} ${prefix}couple
╚═══════《✧》════════╝
╔════《 𝗥𝗔𝗡𝗗𝗢𝗠 》═════╗
╠${setv} ${prefix}motivasi
╠${setv} ${prefix}quotes
╠${setv} ${prefix}truth
╠${setv} ${prefix}renungan
╠${setv} ${prefix}randomcolor
╠${setv} ${prefix}coffe
╠${setv} ${prefix}waifu
╠${setv} ${prefix}neko
╠${setv} ${prefix}.randomcecan1-10
╠${setv} ${prefix}wallpaperml
╠${setv} ${prefix}ulzzangboy
╠${setv} ${prefix}ulzzanggirl
╠${setv} ${prefix}ryujin
╠${setv} ${prefix}pubg
╠${setv} ${prefix}rose
╠${setv} ${prefix}profilepic
╠${setv} ${prefix}car
╠${setv} ${prefix}notnot
╠${setv} ${prefix}kpop
╠${setv} ${prefix}kayes
╠${setv} ${prefix}justina
╠${setv} ${prefix}doggo
╠${setv} ${prefix}cat
╠${setv} ${prefix}cosplay
╠${setv} ${prefix}boneka
╠${setv} ${prefix}bike
╠${setv} ${prefix}blackpink
╠${setv} ${prefix}aesthetic
╠${setv} ${prefix}antiwork
╚═══════《✧》════════╝
╔════《 𝗢𝗪𝗡𝗘𝗥 》══════╗
╠${setv} ${prefix}mode (public or self)
╠${setv} ${prefix}setbio
╠${setv} ${prefix}setppbot
╠${setv} ${prefix}join
╠${setv} ${prefix}leave
╠${setv} ${prefix}block
╠${setv} ${prefix}openblock
╠${setv} ${prefix}listpc
╠${setv} ${prefix}listgc
╠${setv} ${prefix}creategc
╠${setv} ${prefix}addprem
╠${setv} ${prefix}delprem
╠${setv} ${prefix}listprem
╠${setv} ${prefix}addlimit
╠${setv} ${prefix}adduang
╠${setv} ${prefix}bot --settings
╠${setv} ${prefix}bot settings
╠${setv} ${prefix}getsession
╠${setv} ${prefix}delsession
╠${setv} ${prefix}delsampah
╠${setv} ${prefix}anticall
╠${setv} >
╠${setv} <
╚═══════《✧》════════╝`
				await naze.sendMessage(m.chat, {
					document: fake.docs,
					fileName: ucapanWaktu,
					mimetype: pickRandom(fake.listfakedocs),
					fileLength: '100000000000000',
					pageCount: '999',
					caption: menunya,
					contextInfo: {
						mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
						forwardingScore: 10,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName: 'Join For More Info'
						},
						externalAdReply: {
							title: author,
							body: packname,
							showAdAttribution: true,
							thumbnailUrl: profile,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							mediaUrl: my.gh,
							sourceUrl: my.gh,
						}
					}
				}, { quoted: m })
			}
			break

			default:
			if (budy.startsWith('>')) {
				if (!isCreator) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('<')) {
				if (!isCreator) return
				try {
					let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('$')) {
				if (!isCreator) return
				if (!text) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(`${err}`)
					if (stdout) return m.reply(stdout)
				})
			}
		}
	} catch (err) {
		console.log(util.format(err));
		//m.reply('*❗ Internal server error️*');
		naze.sendFromOwner(owner, 'Halo sayang, sepertinya ada yang error nih, jangan lupa diperbaiki ya\n\n*Log error:*\n\n' + util.format(err), m, { contextInfo: { isForwarded: true }})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});