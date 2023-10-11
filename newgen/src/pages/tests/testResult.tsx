import { ArrowForwardIos } from "@mui/icons-material";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import issueImage from "../../assets/issue.png";
import resultImage from "../../assets/result.png";
import conversationImage from "../../assets/conversation.png";
import reputationImage from "../../assets/reputation.png";
const TestResult = () => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-3);
  };

  return (
    <div style={{ padding: "56px 0" }}>
      <div
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          background: "#1e88e5",
          color: "white",
          height: "56px",
          display: "flex",
          alignItems: "center",
          boxShadow:
            "0 3px 6px 0 rgba(0,0,0,0.1), 0 1px 3px 0 rgba(0,0,0,0.08)",
        }}
      >
        <Button
          variant='text'
          sx={{ color: "white" }}
          onClick={() => onClickBack()}
          size='small'
        >
          <ArrowForwardIos />
        </Button>
        <Typography style={{ marginRight: "8px" }}>طرحواره رها شدگی</Typography>
      </div>
      <div style={{ padding: "8px", color: "" }}>
        <Card
          style={{
            border: "1px solid rgba(47, 43, 61, 0.16)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              padding: "8px",
            }}
          >
            <img
              src={issueImage}
              style={{ width: "54px" }}
              alt='issue'
            />

            <Typography sx={{ fontWeight: "bold" }}>
              براساس بررسی و نتیجه تست شما، پیشنهاد می کنیم که با مشاور صحبت
              کنید
            </Typography>
          </div>
        </Card>

        <Card
          style={{
            marginTop: "8px",
            border: "1px solid rgba(47, 43, 61, 0.16)",
          }}
        >
          <CardContent sx={{ paddingBottom: "0px" }}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={resultImage}
                alt='result'
                style={{ width: "32px" }}
              />
              نتیجه کلی
            </Typography>
            <Typography variant='body2'>
              طرحواره رهاشدگی یعنی اینکه فرد إحساس می کند که همه او را ترک می
              کنند و او همیشه تنهاست. افراد مبتلا به این نوع طرحواره دائم
              ارتباطات خود رابا دیگران بر سر موضوعات کم اهمیت قطع می کنند.
              رهاشدگی إحساس تنهایی، ترس از دست دادن عزیزان، ترس از خیانت و ترک
              شریک زندگی و … است.
            </Typography>
          </CardContent>
        </Card>

        <Card
          style={{
            marginTop: "8px",
            border: "1px solid rgba(47, 43, 61, 0.16)",
          }}
        >
          <CardContent sx={{ paddingBottom: "0px" }}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={reputationImage}
                alt='reputation'
                style={{ width: "32px" }}
              />
              تاثیر بر زندگی و روابط کاری
            </Typography>
            <Typography variant='body2'>
              طرحواره رهاشدگی یعنی اینکه فرد إحساس می کند که همه او را ترک می
              کنند و او همیشه تنهاست. افراد مبتلا به این نوع طرحواره دائم
              ارتباطات خود رابا دیگران بر سر موضوعات کم اهمیت قطع می کنند.
              رهاشدگی إحساس تنهایی، ترس از دست دادن عزیزان، ترس از خیانت و ترک
              شریک زندگی و … است.
            </Typography>
          </CardContent>
        </Card>

        <Card
          style={{
            marginTop: "8px",
            border: "1px solid rgba(47, 43, 61, 0.16)",
          }}
        >
          <CardContent sx={{ paddingBottom: "0px" }}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={conversationImage}
                alt='conversation'
                style={{ width: "32px" }}
              />
              تاثیر بر روابط خانوادگی و دوستانه
            </Typography>
            <Typography variant='body2'>
              طرحواره رهاشدگی یعنی اینکه فرد إحساس می کند که همه او را ترک می
              کنند و او همیشه تنهاست. افراد مبتلا به این نوع طرحواره دائم
              ارتباطات خود رابا دیگران بر سر موضوعات کم اهمیت قطع می کنند.
              رهاشدگی إحساس تنهایی، ترس از دست دادن عزیزان، ترس از خیانت و ترک
              شریک زندگی و … است.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestResult;
