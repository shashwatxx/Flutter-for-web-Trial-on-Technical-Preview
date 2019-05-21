import 'package:flutter_web/material.dart';

class Resume extends StatelessWidget {
  Widget _buildNameRow() {
    return Container(
      padding: EdgeInsets.only(top: 10.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Title(
            title: "SHASHWAT MISHRA",
          ),
          SizedBox(
            width: 8.0,
          ),
        ],
      ),
    );
  }

  Widget _buildActionButtons(BuildContext context) {
    return ButtonBar(
      alignment: MainAxisAlignment.center,
      children: <Widget>[
        IconButton(
          icon: Icon(Icons.info),
          color: Theme.of(context).accentColor,
          onPressed: () {},
        ),
        IconButton(
          icon: Icon(Icons.contact_phone),
          color: Colors.red,
          onPressed: () {},
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        title: Text("Shashwat Mishra"),
        actions: <Widget>[
          IconButton(
            icon: Icon(
              Icons.file_download,
            ),
            onPressed: () {},
          ),
        ],
      ),
      body: ListView(
        children: <Widget>[
          Card(
            color: Colors.white70,
            child: Column(
              children: <Widget>[
                FadeInImage(
                  image: NetworkImage(
                      'https://drive.google.com/file/d/1w1me0dAENuh6yYsepNvVJVd63M3ky-ke/view?usp=sharing'),
                  height: 300,
                  fit: BoxFit.cover,
                  placeholder: AssetImage(
                    "assets/infinity.gif",
                  ),
                ),
                _buildNameRow(),
                Text("+91 8889499117"),
                Text("shashwatmishra2111@gmail.com"),
                _buildActionButtons(context)
              ],
            ),
          ),
        ],
      ),
    );
  }
}
