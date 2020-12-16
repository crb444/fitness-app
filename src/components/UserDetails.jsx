import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Statistic, Col} from 'antd'
import Paper from '@material-ui/core/Paper'
import {RadialGauge, AreaChart} from 'reaviz'; 

const UserDetails = () => {
    return (
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography variant="h2">Welcome, insert name</Typography>
            </Grid>
        <Grid item xs={3} style={{paddingTop: 40}}>
        <Paper elevation={3} square={false} >
          <Statistic
            title="Active"
            style={{fontSize: 30, paddingTop:30, paddingBottom:30, paddingLeft:30}}
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600', fontSize: 30 }}
            suffix="%"
          />
        </Paper>
        </Grid>
        <Grid item xs={3} style={{paddingTop: 40}}>
        <Paper elevation={3} square={false}>
          <Statistic
            title="Active"
            style={{fontSize: 30, paddingTop:30, paddingBottom:30, paddingLeft:30}}
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600', fontSize: 30 }}
            suffix="%"
          />
        </Paper>
        </Grid>
        <Grid item xs={3} style={{paddingTop: 40}}>
        <Paper elevation={3} square={false}>
          <Statistic
            title="Active"
            style={{fontSize: 30, paddingTop:30, paddingBottom:30, paddingLeft:30, paddingRight:30}}
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600', fontSize: 30 }}
            suffix="%"
          />
          
   
        </Paper>
        
        
        </Grid>
        <Grid item xs={4} style={{paddingTop: 40}}>
          <RadialGauge
    height={300}
    width={300}
    data={[{ key: 'Austin, TX', data: 24 }]}
  />
  </Grid>
  <Grid item xs={4} style={{paddingTop: 40}}>
          <RadialGauge
    height={300}
    width={300}
    data={[{ key: 'Austin, TX', data: 24 }]}
  />
  </Grid>
  <Grid item xs={4} style={{paddingTop: 40}}>
          <RadialGauge
    height={300}
    width={300}
    data={[{ key: 'Austin, TX', data: 24 }]}
  />

  </Grid>
  <Grid item xs={10} >
  <AreaChart
    height={300}
  
    data={[
      { key: new Date('11/29/2019'), data: 13 },
      { key: new Date('11/30/2019'), data: 7 },
      { key: new Date('12/1/2019'), data: 20 },
    ]}
  />
  </Grid>
        </Grid>

    )
}

export default UserDetails; 