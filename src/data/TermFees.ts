export const TermFees_HEAD = ["สาขาวิชา", "กยศ ลักษณะที่ 1", "กยศ ลักษณะที่ 2", "กยศ ลักษณะที่ 3", "<div>ค่าเล่าเรียน<br/>เทอม 1/1 (มิ.ย. - ก.ค.)</div>", "<div>ค่าเล่าเรียน<br/>เทอม 1/2</div>", "<div>ค่าเล่าเรียน<br/>รวมตลอดหลักสูตร<br/>(ยังไม่รวมส่วนลดทุน)</div>"];

export const TermFeesGroup = [
    {
        id: "0001",
        name: "คณะบริหารธุรกิจ",
    },
    {
        id: "0002",
        name: "คณะวิศวะ",
    },
];
export const TermFeesBranch = [
    {
        id: "1",
        FieldStudy: "คอม",
        TermFeesGroupID: "0001",
        kysOne: true,
        kysTwo: true,
        kysThree: true,
        First: 123456,
        Second: 123456,
        Sum: 123456,
    },
    {
        id: "2",
        FieldStudy: "การเงิน",
        TermFeesGroupID: "0001",
        kysOne: true,
        kysTwo: true,
        kysThree: true,
        First: 123456,
        Second: 123456,
        Sum: 123456,
    }, {
        id: "3",
        FieldStudy: "วิศวะคอม",
        TermFeesGroupID: "0002",
        kysOne: true,
        kysTwo: true,
        kysThree: true,
        First: 123456,
        Second: 123456,
        Sum: 123456,
    }, {
        id: "4",
        FieldStudy: "วิศวะไฟฟ้า",
        TermFeesGroupID: "0002",
        kysOne: true,
        kysTwo: true,
        kysThree: true,
        First: 123456,
        Second: 123456,
        Sum: 123456,
    }
];