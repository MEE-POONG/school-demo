export const navbarArray = [
    { name: 'หน้าแรก', link: '/' },
    { name: 'รู้จัก "พนมวันท์"', link: '/about' },
    { name: 'คณะ/หลักสูตร', link: '/faculty' },
    { name: 'สวัสดิการ', link: '/welfare' },
    {
        name: 'ข้อมูลเพิ่มเติม',
        link: '',
        children: [
            { name: 'วิธีการสมัคร', link: '/register' },
            { name: 'ทีมที่ปรึกษา', link: '/advisor' },
            { name: 'ค่าเล่าเรียน', link: '/termfees' },
        ],
    },
];