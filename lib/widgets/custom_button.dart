import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  final VoidCallback onTap;
  final String text;
  const CustomButton({
    super.key,
    required this.onTap,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    return Container(
      decoration: BoxDecoration(
        boxShadow: [
          BoxShadow(
            color: Colors.blue,
            blurRadius: 5,
            spreadRadius: 0,
          ),
        ],
      ),
      child: ElevatedButton(
        onPressed: onTap,
        style: ElevatedButton.styleFrom(
          shape: const RoundedRectangleBorder(),
          backgroundColor: Color.fromARGB(255, 5, 93, 165),
          minimumSize: Size(
            width,
            50,
          ),
        ),
        child: Text(
          text,
          style: const TextStyle(
            fontSize: 18,
          ),
        ),
      ),
    );
  }
}
