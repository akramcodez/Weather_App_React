import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './infoBox.css';

export default function InfoBox({ info }) {
//   const INIT_img =
//     'https://images.unsplash.com/photo-1557170308-24e08d78ff53?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const HOT_img =
    'https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const COLD_img =
    'https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const RAIN_img =
    'https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card sx={{ width: 350, boxShadow: 2, borderRadius: 3, p: 2 }}>
          <CardMedia
            sx={{ height: 160, borderRadius: '10px 10px 0 0' }}
            image={
              info.humidity > 80
                ? RAIN_img
                : info.temp > 18
                ? HOT_img
                : COLD_img
            }
            title={info.city}
          />
          <CardContent>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                color: info.city === 'Not Found' ? 'red' : 'black',
              }}
            >
              {info.city.toUpperCase()}&nbsp;
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 18 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <p>
                Temperature: <strong>{info.temp}°C</strong>
              </p>
              <p>
                Humidity: <strong>{info.humidity}%</strong>
              </p>
              <p>
                Min Temp: <strong>{info.tempMin}°C</strong>
              </p>
              <p>
                Max Temp: <strong>{info.tempMax}°C</strong>
              </p>
              <p>
                The weather is <i>{info.weather}</i> and feels like{' '}
                <strong>{info.feelsLike}°C</strong>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
