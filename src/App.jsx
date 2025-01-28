import { useState } from 'react';
import './App.css';
import { Form, InputNumber, Button } from 'antd'; // Import Button from antd

function App() {
  const [octClass, setOctClass] = useState();
  const [novClass, setNovClass] = useState();
  const [decClass, setDecClass] = useState();
  const [octAssessment, setOctAssessment] = useState();
  const [novAssessment, setNovAssessment] = useState();
  const [decAssessment, setDecAssessment] = useState();
  const [novAttended, setNovAttended] = useState();
  const [decAttended, setDecAttended] = useState();
  const [octAttended, setOctAttended] = useState();
  const[avAttended, setAvAttended] = useState();
  const [avAssessment, setAvAssessment] = useState();
  const [average, setAverage] = useState();
  const [exam1, setExam1] = useState();
  const [exam1Average, setExam1Average] = useState();
  const [exam2, setExam2] = useState();
  const [exam2Average, setExam2Average] = useState();


  const handleSave = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    setNovClass()
    setDecClass()
    setOctClass()
    setOctAssessment()
    setNovAssessment()
    setDecAssessment()
    setOctAttended()
    setNovAttended()
    setDecAttended()
    setExam1()
    setExam2()
    const calculatedAverage = ((octClass + novClass + decClass) / 3) * 0.6;
    const AssAvverage = ((octAssessment + novAssessment + decAssessment) / 3) * 0.6;
   const  AtteAverage= ((octAttended + novAttended + decAttended) / 3) * 0.6;
   const exam1Average = (exam1 * 0.6);
    const exam2Average = (exam2 * 0.6);
    setAvAttended(AtteAverage);
    setAvAssessment(AssAvverage);
    setAverage(calculatedAverage);
    setExam1Average(exam1Average);
    setExam2Average(exam2Average);
  };

  return (
    <div className="App">
      <Form onSubmit={handleSave}>
        <Form.Item label="كشكول حصة أكتوبر">
          <InputNumber
            value={octClass}
            onChange={(value) => setOctClass(value)}
          />
        </Form.Item>
        <Form.Item label={"تقيم أكتوبر"}>
          <InputNumber
            value={octAssessment}
            onChange={(value) => setOctAssessment(value)}
          />
        </Form.Item>
        <Form.Item label={"حضور أكتوبر"}>
          <InputNumber
            value={octAttended}
            onChange={(value) => setOctAttended(value)}
          />
        </Form.Item>
        <Form.Item label="كشكول حصة نوفمبر">
          <InputNumber
            value={novClass}
            onChange={(value) => setNovClass(value)}
          />
        </Form.Item>
        <Form.Item label={"تقيم نوفمبر"}>
          <InputNumber
            value={novAssessment}
            onChange={(value) => setNovAssessment(value)}
          />
        </Form.Item>
        <Form.Item label={"حضور نوفمبر"}>
          <InputNumber
            value={novAttended}
            onChange={(value) => setNovAttended(value)}
          />
        </Form.Item>
        <Form.Item label="كشكول حصة ديسمبر">
          <InputNumber
            value={decClass}
            onChange={(value) => setDecClass(value)}
          />
        </Form.Item>


        <Form.Item label={"تقيم ديسمبر"}>
          <InputNumber
            value={decAssessment}
            onChange={(value) => setDecAssessment(value)}
          />
        </Form.Item>


        <Form.Item label={"حضور ديسمبر"}>
          <InputNumber
            value={decAttended}
            onChange={(value) => setDecAttended(value)}
          />
        </Form.Item>
<Form.Item label={"اختبار 1"}>
          <InputNumber
            value={exam1}
            onChange={(value) => setExam1(value)}
          />

</Form.Item>
<Form.Item label={"اختبار 2"}>
          <InputNumber
            value={exam2}
            onChange={(value) => setExam2(value)}
          />
</Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={handleSave}>
            حفظ
          </Button>
        </Form.Item>
      </Form>
      <div style={{ marginTop: '20px' }}>
        <strong>معدل كشكول الحصه:</strong> {average?.toFixed(2)}
        <br/>
        <strong>معدل التقييمات :</strong> {avAssessment?.toFixed(2)}<br/>
        <strong>معدل الحضور :</strong> {avAttended?.toFixed(2)}<br/>
        <strong>معدل الاختبار الاول :</strong> {exam1Average?.toFixed(2)}<br/>
        <strong>معدل الاختبار الثاني :</strong> {exam2Average?.toFixed(2)}<br/>
      </div>
    </div>
  );
}

export default App;