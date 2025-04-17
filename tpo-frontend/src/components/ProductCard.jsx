import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: 2 }}
        >
          {product.description}
        </Typography>
        <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
          {product.price}
        </Typography>
        <Button variant="contained" sx={{ marginTop: 2 }} fullWidth>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
