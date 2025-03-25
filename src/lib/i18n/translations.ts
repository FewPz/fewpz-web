import type { InstallationStep, Translations } from '$lib/types/types';

// Installation steps data
export const installationSteps: InstallationStep[] = [
  {
    step: 1,
    title: {
      th: "ตรวจสอบว่ามีเกม Home Sweet Home Online",
      en: "Check if you have Home Sweet Home Online"
    },
    description: {
      th: "ก่อนอื่น คุณต้องมีเกม Home Sweet Home Online ติดตั้งอยู่ในเครื่องเรียบร้อยแล้ว",
      en: "First, make sure you have Home Sweet Home Online already installed on your computer"
    },
    image: "/hsho/check-game.png"
  },
  {
    step: 2,
    title: {
      th: "ดาวน์โหลดไฟล์ NND.zip",
      en: "Download NND.zip file"
    },
    description: {
      th: "เข้าไปยังลิงก์ GitHub และดาวน์โหลดไฟล์ชื่อ NND.zip",
      en: "Go to the GitHub link and download the file named NND.zip"
    },
    subSteps: {
      th: [
        "เข้าไปยังลิงก์ GitHub: https://github.com/kunseru/niwarnneverdies/releases/tag/1.0.2",
        "ดาวน์โหลดไฟล์ชื่อ NND.zip",
        "แตกไฟล์ (Extract) จะได้ 3 ไฟล์หลัก ได้แก่: niwarnnerverdies.exe, Engine, และ HSHO"
      ],
      en: [
        "Go to GitHub link: https://github.com/kunseru/niwarnneverdies/releases/tag/1.0.2",
        "Download the file named NND.zip",
        "Extract the file to get 3 main files: niwarnnerverdies.exe, Engine, and HSHO"
      ]
    },
    image: "/hsho/download.png"
  },
  {
    step: 3,
    title: {
      th: "เตรียมไฟล์ในโฟลเดอร์เกม Home Sweet Home Online",
      en: "Prepare files in the Home Sweet Home Online game folder"
    },
    description: {
      th: "นำไฟล์ที่ได้จากการแตกไฟล์ NND.zip ทั้งหมดใส่ลงในโฟลเดอร์เกม",
      en: "Place all extracted files from NND.zip into the game folder"
    },
    subSteps: {
      th: [
        "เปิดโปรแกรม Steam แล้วหาเกม Home Sweet Home Online",
        "คลิกขวาที่เกม เลือก Manage > Install App > Browse",
        "จะพบโฟลเดอร์ที่ติดตั้งเกม โดยปกติจะอยู่ที่ SteamLibrary\\steamapps\\common\\HSHO",
        "นำไฟล์ที่ได้จากการแตกไฟล์ NND.zip ทั้งหมด (รวมถึงโฟลเดอร์ Engine และ HSHO) ลากใส่ลงไปในโฟลเดอร์ HSHO ของตัวเกมจริง"
      ],
      en: [
        "Open Steam and find Home Sweet Home Online",
        "Right-click on the game, select Manage > Install App > Browse",
        "You'll find the installation folder, typically at SteamLibrary\\steamapps\\common\\HSHO",
        "Drag and drop all extracted files from NND.zip (including Engine and HSHO folders) into the actual HSHO game folder"
      ]
    },
    image: "/hsho/preparing-file.png"
  },
  {
    step: 4,
    title: {
      th: 'เพิ่มเกม "HSHO" ใน Steam',
      en: 'Add "HSHO" game to Steam'
    },
    description: {
      th: "เพิ่มไฟล์ HSHO.exe เป็นเกมใน Steam",
      en: "Add HSHO.exe file as a game in Steam"
    },
    subSteps: {
      th: [
        "ใน Steam ให้คลิก Add a Game (มุมล่างซ้าย)",
        "เลือก Add a Non-Steam Game แล้วกด Browse",
        "ไปที่โฟลเดอร์ SteamLibrary\\steamapps\\common\\HSHO",
        "เลือกไฟล์ HSHO.exe แล้วกดเพิ่ม"
      ],
      en: [
        "In Steam, click Add a Game (bottom left corner)",
        "Select Add a Non-Steam Game and click Browse",
        "Go to the SteamLibrary\\steamapps\\common\\HSHO folder",
        "Select the HSHO.exe file and click Add"
      ]
    },
    image: "/hsho/add-steam.png"
  },
  {
    step: 5,
    title: {
      th: "รันไฟล์ niwarnnerverdies.exe",
      en: "Run niwarnnerverdies.exe file"
    },
    description: {
      th: "เปิดโปรแกรม niwarnnerverdies.exe เพื่อ Patch เกม",
      en: "Open niwarnnerverdies.exe to patch the game"
    },
    subSteps: {
      th: [
        "คลิกขวาที่ไฟล์ niwarnnerverdies.exe เลือก Run as Administrator",
        "หาก Windows แจ้งเตือนความปลอดภัยหรือสงสัยว่าเป็นไวรัส สามารถคลิก More info และกด Run anyway ได้",
        "เมื่อโปรแกรมเปิดขึ้น ให้กดปุ่ม Patch Game (กระบวนการนี้จะตัดการเชื่อมต่อจากเซิร์ฟเวอร์หลัก)"
      ],
      en: [
        "Right-click on niwarnnerverdies.exe and select Run as Administrator",
        "If Windows security warning appears or suspects it's a virus, you can click More info and Run anyway",
        "When the program opens, click the Patch Game button (this process will disconnect from the main server)"
      ]
    },
    image: "/hsho/patch-game.png"
  },
  {
    step: 6,
    title: {
      th: "เข้าเกมผ่านไฟล์ HSHO.exe",
      en: "Launch the game through HSHO.exe"
    },
    description: {
      th: "หลังจาก Patch Game เรียบร้อย ให้เปิดเกม HSHO.exe ที่เราเพิ่มเข้าไปใน Steam แทนที่จะเปิดผ่านตัว Home Sweet Home Online เดิม",
      en: "After patching the game, launch HSHO.exe that we added to Steam instead of the original Home Sweet Home Online"
    },
    image: "/hsho/launch-game.png"
  }
];

// Translation data
export const translations: Translations = {
  th: {
    header: {
      title: "HSHO Nerverdie Wiki",
      subtitle: "วิธีการติดตั้งและใช้งานโปรแกรม \"niwarnneverdies\" สำหรับเกม Home Sweet Home Online"
    },
    introduction: {
      title: "รายละเอียดโปรแกรม",
      description: "โปรแกรม \"niwarnneverdies\" ช่วยให้คุณสามารถเล่นเกม Home Sweet Home Online ได้แม้ว่าจะไม่มีการเชื่อมต่อกับเซิร์ฟเวอร์หลักของเกม โปรแกรมนี้ทำการแก้ไขไฟล์เกมเพื่อให้สามารถเล่นได้แบบออฟไลน์ โดยไม่จำเป็นต้องมีการเชื่อมต่อกับเซิร์ฟเวอร์"
    },
    installationSteps: {
      title: "ขั้นตอนการติดตั้ง"
    },
    notes: {
      title: "หมายเหตุสำคัญ",
      items: [
        "โปรแกรมนี้ใช้สำหรับการเล่นเกมแบบออฟไลน์เท่านั้น ไม่สามารถเชื่อมต่อกับผู้เล่นคนอื่นได้",
        "การใช้งานโปรแกรมนี้อาจขัดต่อข้อตกลงการใช้งานของเกม Home Sweet Home Online",
        "ผู้พัฒนาโปรแกรมและผู้แนะนำวิธีการใช้งานไม่รับผิดชอบต่อความเสียหายที่อาจเกิดขึ้นกับบัญชีเกมของคุณ"
      ]
    },
    footer: {
      copyright: "© 2025 HSHO Wiki. เนื้อหาทั้งหมดเป็นลิขสิทธิ์ของเจ้าของที่เกี่ยวข้อง",
      developer: "พัฒนาโดย อาจารย์มานพ พันธ์โคกกรวด | โปรแกรม \"niwarnneverdies\" พัฒนาโดย kunseru"
    },
    languageSelector: {
      label: "เลือกภาษา",
      options: {
        th: "ไทย",
        en: "อังกฤษ"
      }
    },
    faq: {
      title: "คำถามที่พบบ่อย",
      items: [
        {
          question: "ทำไมคอมพิวเตอร์ถึงแจ้งว่าไม่มีอินเทอร์เน็ตหลังจากปิดแอป NND หรือเมื่อเครื่องคอมพิวเตอร์ค้าง",
          answer: "บางครั้งการปิดแอป NND หรือเมื่อเครื่องคอมพิวเตอร์ค้าง/ล่ม อาจทำให้ค่า Proxy ของเครือข่ายถูกตั้งค่าใหม่ จนทำให้คอมพิวเตอร์ไม่สามารถเชื่อมต่ออินเทอร์เน็ตได้ วิธีการแก้ไข \n1. คลิกที่ Start เลือก Settings แล้วไปที่ Network & Internet > Proxy\n2. เปิดการตั้งค่า Automatically detect settings เป็น ON\n3. ปิดการตั้งค่า Use a proxy server เป็น OFF"
        },
        {
          "question": "จะมีโอกาสที่จะโดนแบนไหม",
          "answer": "ไม่มีโอกาสที่จะโดนแบนเลย เพราะเราไม่ได้มีการติดต่อกับฐานข้อมูลแต่อย่างใด"
        },
        {
          "question": "หากขึ้นคำว่า CANNOT VERIFY YOUR STREAM ควรทำอย่างไร",
          "answer": "แนะนำให้ติดตั้งตัวเกมใหม่ อาจจะเพราะไฟล์ข้อมูลถูกดาวน์โหลดไม่ถูกต้อง"
        },
        {
          "question": "หากขึ้นคำว่า error code = 0 ควรทำอย่างไร",
          "answer": "ให้ลองวางทับไฟล์ใหม่ และกด patch game ใน niwarnneverdie.exe อีกครั้ง โดยไม่ต้องสน error ที่ขึ้นมา และเช็คให้มั่นใจว่ารันตัวเกม HSHO ที่เพิ่มเข้ามาในสตรีม ไม่ใช่ตัวเกมหลัก"
        },
      ]
    }
  },
  en: {
    header: {
      title: "HSHO Nerverdie Wiki",
      subtitle: "How to install and use the \"niwarnneverdies\" program for Home Sweet Home Online"
    },
    introduction: {
      title: "Program Details",
      description: "The \"niwarnneverdies\" program allows you to play Home Sweet Home Online even without connecting to the game's main server. This program modifies game files to enable offline play without requiring a server connection."
    },
    installationSteps: {
      title: "Installation Steps"
    },
    notes: {
      title: "Important Notes",
      items: [
        "This program is for offline gameplay only and cannot connect with other players",
        "Using this program may violate the terms of service of Home Sweet Home Online",
        "The program developer and guide provider are not responsible for any damage that may occur to your game account"
      ]
    },
    footer: {
      copyright: "© 2025 HSHO Wiki. All content is copyright of their respective owners",
      developer: "Developed by Ajarn Manop Phankokgruad | \"niwarnneverdies\" program developed by kunseru"
    },
    languageSelector: {
      label: "Select Language",
      options: {
        th: "Thai",
        en: "English"
      }
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "Why does my computer show that it has no Internet connection after closing the NND app or when the computer crashes?",
          answer: "Sometimes, closing the NND app or a computer crash can reset your network's proxy settings, causing your computer to lose its Internet connection. Here's how to fix it:\n1. Click Start, select Settings, then go to Network & Internet > Proxy\n2. Turn on Automatically detect settings\n3. Turn off Use a proxy server"
        },
        {
          "question": "Is there a chance of getting banned?",
          "answer": "There is no chance of being banned, because we don't communicate with the backend database in any way."
        },
        {
          "question": "What should I do if I get the message 'CANNOT VERIFY YOUR STREAM'?",
          "answer": "It is recommended to reinstall the game. The issue may be due to incorrect file downloads."
        },
        {
          "question": "What should I do if I get the message 'error code = 0'?",
          "answer": "Try overwriting the files with new ones, then click 'patch game' in niwarnneverdie.exe again without worrying about the error message. Also, make sure you're running the HSHO game that was added to Steam, not the main game."
        },
      ]
    }
  }
};